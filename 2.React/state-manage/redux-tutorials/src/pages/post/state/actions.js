export const goToHome =
  () =>
  (dispatch, getState, { history }) => {
    history.push("/");
  };
export const goToPost =
  () =>
  (dispatch, getState, { history }) => {
    history.push("/post");
  };
