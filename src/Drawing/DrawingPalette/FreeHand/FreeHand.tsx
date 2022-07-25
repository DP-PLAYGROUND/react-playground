import { FunctionComponent, useContext, useEffect } from "react";
import { MovementCoords, useMovement } from "../../../hooks/useMovement";
import { CanvasContext } from "../CanvasContext";

export const FreeHand: FunctionComponent = () => {
    const canvasElement = useContext(CanvasContext);

    const canvasContext = canvasElement?.getContext('2d');

    const drawLine = (coords: MovementCoords) => {
        canvasContext?.lineTo(coords.x, coords.y);
        canvasContext?.stroke();
    }

    useMovement(canvasElement, {
        onStart: event => {
            canvasContext?.beginPath();

            drawLine(event)
        },
        onMove: drawLine,
        onEnd: () => canvasContext?.closePath()
    });

    useEffect(() => {
        if (!canvasContext){
            return;
        }

        canvasContext.lineWidth = 1;
        canvasContext.lineCap = 'round';
        canvasContext.strokeStyle = '#000000';
    }, [canvasContext])

    return null;
}