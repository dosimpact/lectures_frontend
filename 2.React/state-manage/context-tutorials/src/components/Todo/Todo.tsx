import React, { useState } from "react";
import FoodTodo from "./container/FoodTodo";
import StudyTodo from "./container/StudyTodo";

const Todo = () => {
  return (
    <>
      <h2>Todo</h2>
      <FoodTodo />
      <StudyTodo />
    </>
  );
};

export default Todo;
