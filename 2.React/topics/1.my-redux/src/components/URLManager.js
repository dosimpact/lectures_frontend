import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Counter from "../Pages/Couter";
import Todo from "../Pages/Todo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Counter />
        <Todo />
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
