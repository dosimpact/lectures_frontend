import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import GuGuDan from "./components/GuGuDan";
const App = () => {
  return (
    <div>
      <GuGuDan />
    </div>
  );
};
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector("#root"));
