import {
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { FunctionComponent } from "react";
import { useMovement } from "../../hooks/useMovement";
import { CanvasContext } from "./CanvasContext";
import { useCanvasResize } from "./useCanvasResize";

export interface DrawingPaletteProps extends HTMLAttributes<HTMLCanvasElement> {
  readonly onDrawingChange?: (element: HTMLCanvasElement) => void;
}

export const DrawingPalette: FunctionComponent<
  PropsWithChildren<DrawingPaletteProps>
> = ({ children, onDrawingChange, ...attrs }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );

  const canvasRef = useCallback(
    (element: HTMLCanvasElement | null) => setCanvasElement(element),
    []
  );

  useCanvasResize(canvasElement);

  useMovement(canvasElement, {
    onEnd: () => canvasElement ? onDrawingChange?.(canvasElement) : null
  })

  return (
    <CanvasContext.Provider value={canvasElement}>
      <canvas ref={canvasRef} {...attrs}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};
