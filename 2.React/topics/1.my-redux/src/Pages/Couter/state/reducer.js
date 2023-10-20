import { ADD_TO_LIST, CHANGE_TEXT, DECREASE, INCREASE } from "./actions";

const initState = {
  counter: 0,
  text: "counterText",
  list: ["hello", "world"],
};

function counterReducer(state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case ADD_TO_LIST:
      return { ...state, list: state.list.concat(payload) };
    case CHANGE_TEXT:
      return { ...state, text: payload };
    default:
      return state;
  }
}

export default counterReducer;
