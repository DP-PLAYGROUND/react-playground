import { FunctionComponent } from "react";
import { DrawingPalette } from "./DrawingPalette/DrawingPalette";
import styles from "./Drawing.module.scss";
import { FreeHandDrawing } from "./DrawingPalette/FreeHandDrawing/FreeHandDrawing";

const Drawing: FunctionComponent = () => {
  return (
    <DrawingPalette className={styles.palette}>
      <FreeHandDrawing />
    </DrawingPalette>
  );
};

export default Drawing;
