import { FunctionComponent, useCallback, useState } from "react";
import { Canvas } from "../Canvas/Canvas";
import { CanvasPencil } from "../Canvas/Tools/CanvasPencil";
import styles from "./Signature.module.scss";
import { SignatureSnapshot } from "./SignatureSnapshot";
import { Actions } from "./Actions/Actions";

const signatureSnapshotFactory = (context: CanvasRenderingContext2D) => {
  const imageData = context.getImageData(
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );

  return new SignatureSnapshot(imageData);
};

export const Signature: FunctionComponent = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const [currentSignatureSnapshot, setCurrentSignatureSnapshot] =
    useState<SignatureSnapshot | null>(null);

  const handleInit = useCallback((context: CanvasRenderingContext2D) => {
    setContext(context);

    handleReset(context);
  }, []);

  const handleReset = (context: CanvasRenderingContext2D) => {
    const signatureSnapshot = signatureSnapshotFactory(context);

    setCurrentSignatureSnapshot(signatureSnapshot);
  };

  const handleChange = useCallback(
    (context: CanvasRenderingContext2D) => {
      const signatureSnapshot = signatureSnapshotFactory(context);

      if (currentSignatureSnapshot) {
        currentSignatureSnapshot.next = signatureSnapshot;
        signatureSnapshot.previous = currentSignatureSnapshot;
      }

      setCurrentSignatureSnapshot(signatureSnapshot);
    },
    [currentSignatureSnapshot]
  );

  const handleUndoRedo = (snapshot: SignatureSnapshot) => {
    context?.putImageData(snapshot.value, 0, 0);

    setCurrentSignatureSnapshot(snapshot);
  };

  const handleClear = () => {
    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    handleReset(context);
  };

  return (
    <div className={styles.signature}>
      <div className={styles.canvas}>
        <Canvas onInit={handleInit}>
          <CanvasPencil onChange={handleChange} />
        </Canvas>
      </div>
      <div>
        {currentSignatureSnapshot && (
          <Actions
            snapshot={currentSignatureSnapshot}
            onUndoRedo={handleUndoRedo}
            onClear={handleClear}
          />
        )}
      </div>
    </div>
  );
};
