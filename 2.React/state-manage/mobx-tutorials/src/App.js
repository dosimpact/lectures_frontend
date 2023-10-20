import React from "react";
import Test from "@components/Test";
import TodoContainerClass from "@components/TodoContainerClass";
import TodoContainer from "@components/TodoContainer";

function App() {
  return (
    <div>
      <TodoContainer />
      <div>---</div>
      <TodoContainerClass />
      {/* <TodoContainerClass /> */}
      {/* <Test /> */}
      {/* <h1>Welcome to React App!!</h1> */}
      {/* <h3>Date : {new Date().toDateString()}</h3> */}
    </div>
  );
}

export default App;
