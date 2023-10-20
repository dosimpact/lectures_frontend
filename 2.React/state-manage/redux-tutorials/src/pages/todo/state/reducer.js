import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

/**
 * {
 *  content:string
 *  id:number
 * }
 */
const initState = [];

export const todoReducer = (state = initState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({ ...payload, id: Date.now() });
    }
    case DELETE_TODO: {
      const id = payload.id;
      if (!id) return state;
      return state.filter((todo) => todo.id !== id);
    }
    case UPDATE_TODO: {
      const id = payload.id;
      if (!id) return state;
      const idx = state.findIndex((todo) => todo.id !== id);
      if (idx < 0) return state;
      state[idx].content = payload.content;
      return [...state];
    }
    default:
      return state;
  }
};
