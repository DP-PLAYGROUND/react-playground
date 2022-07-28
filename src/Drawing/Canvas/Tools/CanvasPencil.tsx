import { FunctionComponent, useContext, useMemo } from "react";
import { TactileMovementOptions, useTactileMovement } from "../../../hooks/useTactileMovement";
import { CanvasContext } from "../CanvasContext";

export interface CanvasPencilProps {
  readonly onChange?: (context: CanvasRenderingContext2D) => void;
}

export const CanvasPencil: FunctionComponent<CanvasPencilProps> = ({
  onChange,
}) => {
  const context = useContext(CanvasContext);

  const tactileMovementOptions = useMemo<TactileMovementOptions>(() => {
    const createCoords = ({ clientX, clientY }: PointerEvent) => {
      const { left, top } = context.canvas.getBoundingClientRect();

      return {
        x: clientX - left,
        y: clientY - top,
      };
    };

    return {
      onStart: (event) => {
        const { x, y } = createCoords(event);

        context.beginPath();

        if (context.lineCap === "round") {
          context.arc(x, y, context.lineWidth / 2, 0, 2 * Math.PI);
          context.fill();
          return;
        }

        const rectSize = context.lineWidth / 2;

        context.fillRect(
          x - rectSize,
          y - rectSize,
          context.lineWidth,
          context.lineWidth
        );
      },
      onMove: (event) => {
        const { x, y } = createCoords(event);

        context.lineTo(x, y);
        context.stroke();
      },
      onEnd: () => onChange?.(context),
    };
  }, [context, onChange]);

  useTactileMovement(context.canvas, tactileMovementOptions);

  return null;
};
