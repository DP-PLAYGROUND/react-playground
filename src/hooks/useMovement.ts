import { useEffect, useRef } from "react";

const movementCoordsFactory = (event: MouseEvent | TouchEvent) => {
  if (event instanceof TouchEvent) {
    return touchEventCoords(event);
  }

  return mouseEventCoords(event);
};

const mouseEventCoords = (event: MouseEvent): MovementCoords => {
  return {
    x: event.clientX,
    y: event.clientY,
  };
};

const touchEventCoords = (event: TouchEvent): MovementCoords => {
  const touch = event.touches[0];

  return {
    x: touch.clientX,
    y: touch.clientY,
  };
};

export interface MovementCoords {
  readonly x: number;
  readonly y: number;
}

export interface MovementEvents {
  readonly onStart?: (event: MovementCoords) => void;
  readonly onMove?: (event: MovementCoords) => void;
  readonly onEnd?: () => void;
}

export const useMovement = <T extends HTMLElement>(
  element: T | null,
  events: MovementEvents
) => {
  const isMovingRef = useRef(false);

  useEffect(() => {
    if (!element) {
      return;
    }

    const coerceCoords = ({ x, y }: MovementCoords): MovementCoords => {
      const { width, height, left, top } = element.getBoundingClientRect();

      return {
        x: Math.max(0, Math.min(width, x - left)),
        y: Math.max(0, Math.min(height, y - top)),
      };
    };

    const enterListener = (event: TouchEvent | MouseEvent) => {
      isMovingRef.current = true;

      const coords = movementCoordsFactory(event);

      events.onStart?.(coerceCoords(coords));
    };

    const releaseListener = () => {
      isMovingRef.current = false;

      events.onEnd?.();
    };

    const moveListener = (event: TouchEvent | MouseEvent) => {
      if (!isMovingRef.current) {
        return;
      }

      event.preventDefault();

      const coords = movementCoordsFactory(event);

      events.onMove?.(coerceCoords(coords));
    };

    element.addEventListener("touchstart", enterListener);
    element.addEventListener("mousedown", enterListener);

    document.addEventListener("touchend", releaseListener);
    document.addEventListener("mouseup", releaseListener);

    element.addEventListener("touchmove", moveListener);
    element.addEventListener("mousemove", moveListener);

    return () => {
      element.removeEventListener("touchstart", enterListener);
      element.removeEventListener("mousedown", enterListener);

      document.removeEventListener("touchend", releaseListener);
      document.removeEventListener("mouseup", releaseListener);

      element.removeEventListener("touchmove", moveListener);
      element.removeEventListener("mousemove", moveListener);
    };
  }, [element, events]);
};
