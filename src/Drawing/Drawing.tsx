import { FunctionComponent } from "react";
import { DrawingPalette } from "./DrawingPalette/DrawingPalette";
import styles from "./Drawing.module.scss";
import { FreeHand } from "./DrawingPalette/FreeHand/FreeHand";

const Drawing: FunctionComponent = () => {
  return (
    <DrawingPalette className={styles.palette}>
        <FreeHand />
      </DrawingPalette>
  );
};

export default Drawing;
