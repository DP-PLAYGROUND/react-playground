import { FunctionComponent } from "react";
import { Signature } from "./Signature/Signature";

const Drawing: FunctionComponent = () => {
  const handleSignatureChange = (data: ImageData) => {
    console.log(data);
  };

  return <Signature onChange={handleSignatureChange} />;
};

export default Drawing;
