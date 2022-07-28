import { useEffect, useRef } from "react";

export interface TactileMovementOptions {
  readonly onStart?: (event: PointerEvent) => void;
  readonly onMove?: (event: PointerEvent) => void;
  readonly onEnd?: () => void;
}

export const useTactileMovement = <T extends HTMLElement>(
  element: T | null,
  options: TactileMovementOptions
) => {
  const isMovingRef = useRef(false);

  useEffect(() => {
    if (!element) {
      return;
    }

    const enterListener = (event: PointerEvent) => {
      isMovingRef.current = true;

      options.onStart?.(event);
    };

    const releaseListener = () => {
      if (!isMovingRef.current) {
        return;
      }

      isMovingRef.current = false;

      options.onEnd?.();
    };

    const moveListener = (event: PointerEvent) => {
      if (!isMovingRef.current) {
        return;
      }

      options.onMove?.(event);
    };

    element.addEventListener("pointerdown", enterListener);
    document.addEventListener("pointermove", moveListener);
    document.addEventListener("pointerup", releaseListener);

    return () => {
      element.removeEventListener("pointerdown", enterListener);
      document.removeEventListener("pointermove", moveListener);
      document.removeEventListener("pointerup", releaseListener);
    };
  }, [element, options]);
};
