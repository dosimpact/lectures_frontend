export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const ADD_TO_LIST = "ADD_TO_LIST";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const changeText = (payload) => ({
  type: CHANGE_TEXT,
  payload,
});

export const addToList = (payload) => ({
  type: ADD_TO_LIST,
  payload,
});

export const lazyIncrease = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const lazyDecrease = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
