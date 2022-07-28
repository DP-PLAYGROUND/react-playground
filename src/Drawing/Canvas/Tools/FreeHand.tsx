import { FunctionComponent, useContext } from "react";
import { useMovement, MovementCoords } from "../../../hooks/useMovement";
import { CanvasContext } from "../CanvasContext";

export const FreeHand: FunctionComponent = () => {
  const context = useContext(CanvasContext);

  useMovement(context.canvas, {
    onStart: (coords) => {
      context.beginPath();

      if (context.lineCap === "round") {
        context.arc(coords.x, coords.y, context.lineWidth / 2, 0, 2 * Math.PI);
        context.fill();
        return;
      }

      context.fillRect(
        coords.x - context.lineWidth / 2,
        coords.y - context.lineWidth / 2,
        context.lineWidth,
        context.lineWidth
      );
    },
    onMove: (coords: MovementCoords) => {
      context.lineTo(coords.x, coords.y);
      context.stroke();
    },
    onEnd: () => context.closePath(),
  });

  return null;
};
