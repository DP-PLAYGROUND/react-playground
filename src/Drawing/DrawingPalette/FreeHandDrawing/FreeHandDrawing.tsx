import { FunctionComponent, useContext, useEffect } from "react";
import { CanvasContext } from "../CanvasContext";

export type FreeHandProps = Partial<
  Pick<CanvasRenderingContext2D, "lineWidth" | "lineCap" | "strokeStyle">
>;

export const FreeHandDrawing: FunctionComponent<FreeHandProps> = ({
  lineWidth = 1,
  lineCap = "round",
  strokeStyle = "#000000",
}) => {
  const canvasContext = useContext(CanvasContext);

  const canvasElementContext = canvasContext.element?.getContext("2d");

  // useMovement(canvasContext.element, {
  //   onStart: (event) => {
  //     canvasElementContext?.beginPath();

  //     drawLine(event);
  //   },
  //   onMove: drawLine,
  //   onEnd: () => {
  //     canvasElementContext?.closePath();
  //     canvasContext.drawingChange.notify();
  //   },
  // });

  useEffect(() => {
    if (!canvasElementContext) {
      return;
    }

    canvasElementContext.lineWidth = lineWidth;
    canvasElementContext.lineCap = lineCap;
    canvasElementContext.strokeStyle = strokeStyle;
  }, [canvasElementContext, lineWidth, lineCap, strokeStyle]);

  return null;
};
