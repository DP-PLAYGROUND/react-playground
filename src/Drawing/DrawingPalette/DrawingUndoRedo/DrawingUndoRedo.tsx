import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SnapshotNode } from "./SnapshotNode";
import { CanvasContext } from "../CanvasContext";

export const DrawingUndoRedo: FunctionComponent = () => {
  const canvasContext = useContext(CanvasContext);

  const [snapshotNode, setSnapshotNode] = useState<SnapshotNode<string> | null>(null);

  const redraw = (snapshot: string) => {
    const { element: canvasElement } = canvasContext;
    const canvasElementContext = canvasContext.element?.getContext("2d");

    if (!canvasElement || !canvasElementContext) {
      return;
    }

    const { devicePixelRatio = 1 } = window;

    const width = canvasElement.width / devicePixelRatio;
    const height = canvasElement.height / devicePixelRatio;

    const imgElement = document.createElement("img");
    imgElement.src = snapshot;

    imgElement.onload = () => {
      canvasElementContext.clearRect(0, 0, width, height);
      canvasElementContext.drawImage(imgElement, 0, 0, width, height);
    };
  };

  const handleUndo = () => {
    const { previous } = snapshotNode ?? {};

    if (!previous) {
      return;
    }

    redraw(previous.value);
    setSnapshotNode(previous);
  };

  const handleRedo = () => {
    const { next } = snapshotNode ?? {};

    if (!next) {
      return;
    }

    redraw(next.value);
    setSnapshotNode(next);
  };

  useEffect(() => {
    const unsubscribeDrawingChanges = canvasContext.drawingChange.subscribe(
      () => {
        const snapshot = canvasContext.element?.toDataURL();

        if (!snapshot) {
          return;
        }

        setSnapshotNode((state) => {
          const node = new SnapshotNode(snapshot);

          if (state) {
            state.next = node;
            node.previous = state;
            return node;
          }

          return node;
        });
      }
    );

    return () => {
      unsubscribeDrawingChanges();
    };
  }, [canvasContext]);

  return (
    <>
      <button disabled={!snapshotNode?.previous} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={!snapshotNode?.next} onClick={handleRedo}>
        Redo
      </button>
    </>
  );
};
