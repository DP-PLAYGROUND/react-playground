import {
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FunctionComponent } from "react";
import { CanvasContext } from "./CanvasContext";

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

  useEffect(() => {
    const canvasContext = canvasElement?.getContext("2d");

    if (!canvasElement || !canvasContext) {
      return;
    }

    const { width, height } = canvasElement.getBoundingClientRect();

    if (canvasElement.width === width && canvasElement.height === height) {
      return;
    }

    const { devicePixelRatio: ratio = 1 } = window;

    canvasElement.width = width * ratio;
    canvasElement.height = height * ratio;
    canvasContext.scale(ratio, ratio);
  }, [canvasElement]);

  return (
    <CanvasContext.Provider value={canvasElement}>
      <canvas ref={canvasRef} {...attrs}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};
