import { FLAG_DOWN, FLAG_UP } from "./actions";

const flagReducer = (
  state = { flagUpCount: 0, lastedUpdate: null },
  action
) => {
  switch (action.type) {
    case FLAG_UP:
      return {
        flagUpCount: state.flagUpCount + 1,
        lastedUpdate: new Date().toTimeString(),
      };
    case FLAG_DOWN:
      return {
        flagUpCount: state.flagUpCount - 1,
        lastedUpdate: new Date().toTimeString(),
      };
    default:
      return state;
  }
};

export default flagReducer;
