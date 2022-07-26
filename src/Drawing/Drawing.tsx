import { FunctionComponent } from "react";
import { DrawingPalette } from "./DrawingPalette/DrawingPalette";
import styles from "./Drawing.module.scss";
import { FreeHandDrawing } from "./DrawingPalette/FreeHandDrawing/FreeHandDrawing";
import { ExportDrawing } from "./DrawingPalette/ExportDrawing/ExportDrawing";

const Drawing: FunctionComponent = () => {
  return (
    <DrawingPalette className={styles.palette}>
      <FreeHandDrawing />
      <ExportDrawing type="image/webp" quality={1}/>
    </DrawingPalette>
  );
};

export default Drawing;
