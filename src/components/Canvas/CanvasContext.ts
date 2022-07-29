import { createContext } from "react";

export const CanvasContext = createContext(document.createElement('canvas').getContext('2d')!);