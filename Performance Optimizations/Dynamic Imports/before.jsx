// Static import
import HeavyComponent from "./HeavyComponent";
import { useState } from "react";

const Comp = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show Component</button>
      {show && <HeavyComponent />}
    </div>
  );
};

export default Comp;

//! the component basically shows and unshows the heavyComp based on button clicks
