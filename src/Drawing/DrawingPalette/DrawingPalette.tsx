import { PropsWithChildren, useCallback, useState } from "react";
import { FunctionComponent } from "react";
import { CanvasContext } from "./CanvasContext";

export const DrawingPalette: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );

  const canvasRef = useCallback(
    (element: HTMLCanvasElement | null) => setCanvasElement(element),
    []
  );

  return (
    <CanvasContext.Provider value={canvasElement}>
      <canvas ref={canvasRef}></canvas>
      {children}
    </CanvasContext.Provider>
  );
};
