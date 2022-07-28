import { FunctionComponent } from "react";
import { Canvas } from "./Canvas/Canvas";
import { FreeHand } from "./Canvas/Tools/FreeHand";

const Drawing: FunctionComponent = () => {
  return (
    <div style={{ display: "inline-flex", border: "1px solid black" }}>
      <Canvas>
        <FreeHand />
      </Canvas>
    </div>
  );
};

export default Drawing;
