import { FunctionComponent, useContext, useEffect } from "react";
import { MovementCoords, useMovement } from "../../../hooks/useMovement";
import { CanvasContext } from "../CanvasContext";

export type FreeHandProps = Partial<
  Pick<CanvasRenderingContext2D, "lineWidth" | "lineCap" | "strokeStyle">
>;

export const FreeHand: FunctionComponent<FreeHandProps> = ({
  lineWidth = 1,
  lineCap = "round",
  strokeStyle = "#000000",
}) => {
  const canvasElement = useContext(CanvasContext);

  const canvasContext = canvasElement?.getContext("2d");

  const drawLine = (coords: MovementCoords) => {
    canvasContext?.lineTo(coords.x, coords.y);
    canvasContext?.stroke();
  };

  useMovement(canvasElement, {
    onStart: (event) => {
      canvasContext?.beginPath();

      drawLine(event);
    },
    onMove: drawLine,
    onEnd: () => canvasContext?.closePath(),
  });

  useEffect(() => {
    if (!canvasContext) {
      return;
    }

    canvasContext.lineWidth = lineWidth;
    canvasContext.lineCap = lineCap;
    canvasContext.strokeStyle = strokeStyle;
  }, [canvasContext, lineWidth, lineCap, strokeStyle]);

  return null;
};
