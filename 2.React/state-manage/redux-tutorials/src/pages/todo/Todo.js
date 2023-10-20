import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoggerDisplay } from "../../components/ServerLogger";
import { addTodo, addTodoWithI18N } from "./state/actions";

const View = ({ todos, userInput, setUserInput, onSubmit, handleI18Todo }) => {
  return (
    <>
      <h2>redux onboarding</h2>
      <label> New Todo : </label>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
      ></input>
      <button onClick={handleI18Todo}>Add KOR,ENG,CHN</button>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.content}</div>
        ))}
      </ul>
    </>
  );
};

const ViewModel = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);
  const [userInput, setUserInput] = useState("");

  const onSubmit = () => {
    if (userInput) dispatch(addTodo({ content: userInput }));
    setUserInput("");
  };
  const handleI18Todo = () => {
    dispatch(addTodoWithI18N({ content: "안녕" }));
  };

  return (
    <View
      todos={todos}
      userInput={userInput}
      setUserInput={setUserInput}
      onSubmit={onSubmit}
      handleI18Todo={handleI18Todo}
    />
  );
};

const Todo = () => {
  return (
    <div>
      <LoggerDisplay />
      <ViewModel />
    </div>
  );
};

export default Todo;
