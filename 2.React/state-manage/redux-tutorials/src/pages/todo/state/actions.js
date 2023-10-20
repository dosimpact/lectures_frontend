import { writeServerLogAsync } from "../../common/state/serverLogActions";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const ADD_TODO_WITH_I18N = "ADD_TODO_WITH_I18N";

export const addTodo = ({ content }) => {
  return {
    type: ADD_TODO,
    payload: { content },
  };
};
export const updateTodo = ({ id, content }) => {
  return {
    type: UPDATE_TODO,
    payload: { id, content },
  };
};
export const deleteTodo = ({ id }) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};
/**
 * example
 *  - todo 내용을 번역해서 , 2개 더 추가해주기
 *  - 이를 비동기적으로, 서버에 로그를 남기기
 */

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const transEN = async (con) => {
  await sleep(300);
  return `${con}(EN)`;
};
const transCN = async (con) => {
  await sleep(1000);
  return `${con}(CN)`;
};

export const addTodoWithI18N =
  ({ content }) =>
  async (dispatch, getState) => {
    const todo = getState().todo;
    const len = todo.length;
    console.log("prev Todo len : ", len);
    const [en, cn] = await Promise.all([transEN(content), transCN(content)]);
    dispatch(addTodo({ content }));
    dispatch(addTodo({ content: en }));
    dispatch(addTodo({ content: cn }));
    dispatch(writeServerLogAsync({ log: "addTodo" }));
  };
