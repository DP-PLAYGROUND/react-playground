import { FunctionComponent } from "react";
import { DrawingPalette } from "./DrawingPalette/DrawingPalette";
import styles from "./Drawing.module.scss";
import { FreeHand } from "./DrawingPalette/FreeHand/FreeHand";

const Drawing: FunctionComponent = () => {
  return (
    <section className={styles.palette}>
      <DrawingPalette>
        <FreeHand />
      </DrawingPalette>
    </section>
  );
};

export default Drawing;
