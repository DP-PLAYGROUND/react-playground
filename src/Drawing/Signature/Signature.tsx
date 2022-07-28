import { FunctionComponent, useCallback, useState } from "react";
import { Canvas } from "../Canvas/Canvas";
import { CanvasPencil } from "../Canvas/Tools/CanvasPencil";
import styles from "./Signature.module.scss";
import { SignatureSnapshot } from "./SignatureSnapshot";

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
  const [currentSignatureSnapshot, setCurrentSignatureSnapshot] =
    useState<SignatureSnapshot | null>(null);

  const handleInit = useCallback((context: CanvasRenderingContext2D) => {
    const signatureSnapshot = signatureSnapshotFactory(context);

    setCurrentSignatureSnapshot(signatureSnapshot);
  }, []);

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

  return (
    <div className={styles.signature}>
      <div className={styles.canvas}>
        <Canvas onInit={handleInit}>
          <CanvasPencil onChange={handleChange} />
        </Canvas>
      </div>
      <div>
        <button disabled={!currentSignatureSnapshot?.previous}>Undo</button>
        <button disabled={!currentSignatureSnapshot?.next}>Redo</button>
      </div>
    </div>
  );
};
