import * as React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

const App = () => {
  return <div>app231 asd</div>;
};
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector("#root"));
