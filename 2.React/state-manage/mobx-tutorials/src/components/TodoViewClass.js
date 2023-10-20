import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class TodoViewClass extends React.Component {
  constructor(props) {
    super(props);
  }

  @observable
  inputState = {
    userInput: "",
  };

  @action onChangeInput = (e) => {
    console.log("-->e.target.value;", e.target.value);
    this.inputState.userInput = e.target.value;
  };

  render() {
    const { todoList, lastedUpdate, addTodo, updateTodo, deleteTodo } =
      this.props;
    return (
      <div>
        <h3>TodoViewClass</h3>
        <input
          value={this.inputState.userInput}
          onChange={this.onChangeInput}
        ></input>
        <button
          onClick={() => {
            addTodo({ name: "added", isFin: true });
          }}
        >
          Add todo
        </button>
        <ul>
          {todoList &&
            todoList?.map((todo) => {
              return (
                <li>
                  name : {todo.name} | isFin {todo?.isFin ? "fin" : "not yet"}{" "}
                </li>
              );
            })}
        </ul>
        <div> lasted Updated {lastedUpdate} </div>
      </div>
    );
  }
}

export default TodoViewClass;
