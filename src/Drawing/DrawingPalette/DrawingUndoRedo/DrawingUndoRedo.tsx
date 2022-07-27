import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SnapshotNode } from "./SnapshotNode";
import { CanvasContext } from "../CanvasContext";

export const DrawingUndoRedo: FunctionComponent = () => {
  const canvasContext = useContext(CanvasContext);

  const [snapshotNode, setSnapshotNode] = useState<SnapshotNode | null>(null);

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

  const applySnapshotNode = (snapshotNode: SnapshotNode) => {
    redraw(snapshotNode.value);
    setSnapshotNode(snapshotNode);
  };

  useEffect(() => {
    const { element } = canvasContext;

    if (!element) {
      return;
    }

    setSnapshotNode(new SnapshotNode(element.toDataURL()));

    const unsubscribeDrawingChanges = canvasContext.drawingChange.subscribe(
      () => {
        setSnapshotNode((state) => {
          const node = new SnapshotNode(element.toDataURL());

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
      <button
        disabled={!snapshotNode?.previous}
        onClick={() => applySnapshotNode(snapshotNode?.previous!)}
      >
        Undo
      </button>
      <button
        disabled={!snapshotNode?.next}
        onClick={() => applySnapshotNode(snapshotNode?.next!)}
      >
        Redo
      </button>
    </>
  );
};
