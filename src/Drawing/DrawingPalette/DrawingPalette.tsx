import {
  createElement,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FunctionComponent } from "react";
import { CanvasContext } from "./CanvasContext";
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

  useCanvasResize(canvasElement);

  return (
    <CanvasContext.Provider value={canvasElement}>
      <canvas ref={canvasRef} {...attrs}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};
