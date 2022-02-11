import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import GuGuDan from "./components/GuGuDan";
import WordRelay from "./components/WordRelay";
import GuGuDanClass from "./components/GuGuDanClass";
import WordRelay2 from "./components/WordRelay2";
import NumberBaseball from "./components/NumberBaseball";
import NB from "./components/NB";
import ResponseCheck from "./components/ResponseCheck";
import RC from "./components/RC";
// import RSP from "./components/RSP";
import MyRSP from "./components/MyRSP";

import MineSearch from "./mineSearch/MineSearch";
const App = () => {
  return (
    <div>
      <MyRSP />
      {/* <MineSearch /> */}
      {/* <RSP /> */}
      {/* <ResponseCheck /> */}
      {/* <NB /> */}
      {/* <NumberBaseball /> */}
      {/* <WordRelay2 /> */}
      {/* <GuGuDanClass />
      <GuGuDan />
      <WordRelay></WordRelay> */}
    </div>
  );
};
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector("#root"));
