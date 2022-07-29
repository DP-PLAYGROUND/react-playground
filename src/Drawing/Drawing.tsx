import { FunctionComponent } from "react";
import { Canvas } from "../components/Canvas/Canvas";
import { CanvasPencil } from "../components/Canvas/Tools/CanvasPencil";
import styles from './Drawing.module.scss';

const Drawing: FunctionComponent = () => {
  return (
    <Canvas className={styles.canvas}>
      <CanvasPencil/>
    </Canvas>);
};

export default Drawing;
