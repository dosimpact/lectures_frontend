import React from "react";
import Ex01 from "./examples/Ex01";
import Ex02 from "./examples/Ex02";
import CustomNodeFlow from "./examples/CustomNodeFlow";

// you need these styles for React Flow to work properly
import "react-flow-renderer/dist/style.css";

// additionally you can load the default theme
import "react-flow-renderer/dist/theme-default.css";
import "./styles/override.css";

import Dragdrop from "./dragdrop/index";
function App() {
  return (
    <>
      <Dragdrop />
      {/* <Ex01 /> */}
      {/* <Ex02 /> */}
      {/* <CustomNodeFlow /> */}
    </>
  );
}

export default App;
