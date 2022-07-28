import { FunctionComponent, useContext } from "react";
import { useMovement, MovementCoords } from "../../../hooks/useMovement";
import { CanvasContext } from "../CanvasContext";

export const FreeHand: FunctionComponent = () => {
  const context = useContext(CanvasContext);

  const drawLine = (coords: MovementCoords) => {
    context.lineTo(coords.x, coords.y);
    context.stroke();
  };

  useMovement(context.canvas, {
    onStart: () => context.beginPath(),
    onMove: drawLine,
    onEnd: () => context.closePath(),
  });

  return null;
};
