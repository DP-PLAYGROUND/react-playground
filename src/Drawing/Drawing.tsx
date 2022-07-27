import { FunctionComponent } from "react";
import { DrawingPalette } from "./DrawingPalette/DrawingPalette";
import styles from "./Drawing.module.scss";
import { FreeHandDrawing } from "./DrawingPalette/FreeHandDrawing/FreeHandDrawing";
import { DrawingExport } from "./DrawingPalette/DrawingExport/DrawingExport";
import { DrawingUndoRedo } from "./DrawingPalette/DrawingUndoRedo/DrawingUndoRedo";

const Drawing: FunctionComponent = () => {
  return (
    <DrawingPalette className={styles.palette}>
      <FreeHandDrawing />
      <DrawingUndoRedo/>
      <DrawingExport type="image/webp" quality={1}/>
    </DrawingPalette>
  );
};

export default Drawing;
