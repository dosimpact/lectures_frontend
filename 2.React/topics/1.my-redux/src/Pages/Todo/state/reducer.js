import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

const initState = [];

const todoReducer = (state = initState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_TODO:
      return state.concat(payload);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);
    case UPDATE_TODO:
      return state;
    default:
      return state;
  }
};
export default todoReducer;
