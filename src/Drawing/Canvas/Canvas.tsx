import {
  CanvasHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { CanvasContext } from "./CanvasContext";

export interface CanvasProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  readonly onInit?: (context: CanvasRenderingContext2D) => void;
}

export const Canvas: FunctionComponent<PropsWithChildren<CanvasProps>> = ({
  children,
  onInit,
  ...attrs
}) => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const canvasRef = useCallback((element: HTMLCanvasElement | null) => {
    const context = element?.getContext("2d");

    if (!context) {
      return;
    }

    setContext(context);
    onInit?.(context);
  }, [onInit]);

  return (
    <canvas ref={canvasRef} {...attrs}>
      {context && (
        <CanvasContext.Provider value={context}>
          {children}
        </CanvasContext.Provider>
      )}
    </canvas>
  );
};
