import React from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import useTodoList from "../../hooks/useTodoList";
import todo from "../api/todo";
import produce from "immer";
import _ from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, newCounterVal } from "../../store";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const res = useRecoilValue(newCounterVal);
  console.log(res);

  return (
    <div>
      <div>count : {counter}</div>
      <button
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter((p) => p - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

const Todo = () => {
  const { addNewTodo, deleteTodo, isLoading, todoList, updateTodo } =
    useTodoList();

  return (
    <div>
      {todoList.map((todo) => {
        const debounceInput = _.debounce((nextValue) => {
          const newTodo = produce(todo, (nextTodo) => {
            nextTodo.fields.Name = nextValue;
            return nextTodo;
          });
          updateTodo(newTodo);
        }, 500);

        return (
          <div key={todo.id} style={{ display: "flex" }}>
            <Checkbox
              isChecked={todo.fields.Done === true}
              onChange={(e) => {
                const newTodo = produce(todo, (nextTodo) => {
                  nextTodo.fields.Done = e.target.checked;
                  return nextTodo;
                });

                updateTodo(newTodo);
              }}
            />
            <Editable
              defaultValue={todo.fields.Name}
              onChange={debounceInput}
              // onChange={(nextValue) => {
              //   const newTodo = produce(todo, (nextTodo) => {
              //     nextTodo.fields.Name = nextValue;
              //     return nextTodo;
              //   });
              //   updateTodo(newTodo);
              // }}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Button
              size="xs"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              삭제
            </Button>
          </div>
        );
      })}
      {/* <pre>{!isLoading && JSON.stringify(data.data, null, 2)}</pre> */}
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          addNewTodo();
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
};

export default Home;
