import {
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { FunctionComponent } from "react";
import { Subject } from "../../app/Subject";
import { CanvasContext, CanvasContextValue } from "./CanvasContext";
import { useCanvasResize } from "./useCanvasResize";

export type DrawingPaletteProps = HTMLAttributes<HTMLCanvasElement>;

export const DrawingPalette: FunctionComponent<
  PropsWithChildren<DrawingPaletteProps>
> = ({ children, ...attrs }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );

  const canvasRef = useCallback(
    (element: HTMLCanvasElement | null) => setCanvasElement(element),
    []
  );

  const canvasContextValue = useMemo<CanvasContextValue>(() => ({
    element: canvasElement,
    drawingChange: new Subject()
  }), [canvasElement])

  useCanvasResize(canvasElement);

  return (
    <CanvasContext.Provider value={canvasContextValue}>
      <canvas ref={canvasRef} {...attrs}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};
