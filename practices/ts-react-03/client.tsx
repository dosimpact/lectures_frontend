import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import GuGuDan from "./components/GuGuDan";
import WordRelay from "./components/WordRelay";
import GuGuDanClass from "./components/GuGuDanClass";
import WordRelay2 from "./components/WordRelay2";

const App = () => {
  return (
    <div>
      <WordRelay2 />
      {/* <GuGuDanClass />
      <GuGuDan />
      <WordRelay></WordRelay> */}
    </div>
  );
};
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector("#root"));
