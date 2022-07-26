import { FunctionComponent, useContext } from "react";
import { CanvasContext } from "../CanvasContext";

export interface ExportDrawingProps {
    /**
     * @example image/png
     */
    readonly type?: string;
    /**
     * Number between 0 and 1
     */
    readonly quality?: number;
}
export const ExportDrawing: FunctionComponent<ExportDrawingProps> = ({type, quality}) => {
    const canvasContext = useContext(CanvasContext);

    const handleExport = () => {  
        const url = canvasContext.element?.toDataURL(type, quality);
    
        if (!url) {
          return;
        }
    
        const aElement = document.createElement('a');
        aElement.download = 'drawing';
        aElement.href = url;
        aElement.click();
        aElement.remove();
      }

    return (
        <button onClick={handleExport}>Export</button>
    )
}