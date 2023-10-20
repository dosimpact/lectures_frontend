import { observable } from "mobx";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

class OrderLine {
  @observable
  price = 0;
  //   @observable amount = 1;
}
