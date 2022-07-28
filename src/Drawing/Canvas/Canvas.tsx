import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { CanvasContext } from "./CanvasContext";

export const Canvas: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const canvasRef = useCallback((element: HTMLCanvasElement | null) => {
    const context = element?.getContext("2d");

    return context && setContext(context);
  }, []);

  return (
    <canvas ref={canvasRef}>
      {context && (
        <CanvasContext.Provider value={context}>
          {children}
        </CanvasContext.Provider>
      )}
    </canvas>
  );
};
