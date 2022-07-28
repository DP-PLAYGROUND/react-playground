import { FunctionComponent } from "react";
import { Canvas } from "./Canvas/Canvas";
import { CanvasPencil } from "./Canvas/Tools/CanvasPencil";

const Drawing: FunctionComponent = () => {
  return (
    <Canvas style={{touchAction: 'none'}}>
      <CanvasPencil />
    </Canvas>
  );
};

export default Drawing;
