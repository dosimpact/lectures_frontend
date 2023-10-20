import { WRITE_LOG } from "./serverLogActions";

export const serverLogReducer = (
  state = { log: "", lastUpdate: "" },
  action
) => {
  const payload = action.payload;
  switch (action.type) {
    case WRITE_LOG: {
      return { ...payload, lastUpdate: new Date().toTimeString() };
    }
    default:
      return state;
  }
};
