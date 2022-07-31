import { SignatureSnapshot } from "./SignatureSnapshot";

export const signatureSnapshotFactory = (context: CanvasRenderingContext2D) => {
    const imageData = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
  
    return new SignatureSnapshot(imageData);
  };