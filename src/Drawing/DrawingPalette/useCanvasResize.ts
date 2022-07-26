import { useEffect } from "react";

export const useCanvasResize = (element: HTMLCanvasElement | null) => {
    useEffect(() => {
        const canvasContext = element?.getContext("2d");
    
        if (!element || !canvasContext) {
          return;
        }
    
        const { width, height } = element.getBoundingClientRect();
    
        if (element.width === width && element.height === height) {
          return;
        }
    
        const { devicePixelRatio: ratio = 1 } = window;
    
        element.width = width * ratio;
        element.height = height * ratio;
        canvasContext.scale(ratio, ratio);
      }, [element]);
}