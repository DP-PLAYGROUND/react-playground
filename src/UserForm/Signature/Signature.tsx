import { FunctionComponent, useCallback, useState } from "react";
import { Canvas } from "../../components/Canvas/Canvas";
import { CanvasPencil } from "../../components/Canvas/Tools/CanvasPencil";
import styles from "./Signature.module.scss";
import { SignatureSnapshot } from "./SignatureSnapshot";
import { Actions } from "./Actions/Actions";
import { useEffect } from "react";

const signatureSnapshotFactory = (context: CanvasRenderingContext2D) => {
  const imageData = context.getImageData(
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );

  return new SignatureSnapshot(imageData);
};

export interface SignatureProps {
  readonly onChange?: (data: ImageData) => void;
}

export const Signature: FunctionComponent<SignatureProps> = ({ onChange }) => {
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const [currentSignatureSnapshot, setCurrentSignatureSnapshot] =
    useState<SignatureSnapshot | null>(null);

  useEffect(() => {
    return (
      currentSignatureSnapshot?.value &&
      onChange?.(currentSignatureSnapshot.value)
    );
  }, [onChange, currentSignatureSnapshot]);

  const handleInit = useCallback((context: CanvasRenderingContext2D) => {
    setContext(context);

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

  const handleUndoRedo = (snapshot: SignatureSnapshot) => {
    if (!context) {
      return;
    }

    context.putImageData(snapshot.value, 0, 0);

    setCurrentSignatureSnapshot(snapshot);
  };

  const handleClear = () => {
    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const signatureSnapshot = signatureSnapshotFactory(context);

    setCurrentSignatureSnapshot(signatureSnapshot);
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
