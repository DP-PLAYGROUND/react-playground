import { createContext } from "react";
import { Subject } from "../../app/Subject";

export interface CanvasContextValue {
    readonly element: HTMLCanvasElement | null;
    readonly drawingChange: Subject;
}

export const CanvasContext = createContext<CanvasContextValue>({
    element: null,
    drawingChange: new Subject()
});