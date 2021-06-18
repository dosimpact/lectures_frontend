import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import WordRelay from "./components/WordRelay";
const App = () => {
  return (
    <div>
      <WordRelay></WordRelay>
    </div>
  );
};
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector("#root"));
