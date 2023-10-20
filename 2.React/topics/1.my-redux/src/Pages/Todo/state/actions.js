export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
