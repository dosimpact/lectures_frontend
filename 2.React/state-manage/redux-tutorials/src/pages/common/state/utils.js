import { CACHE_WRITE } from "./cacheActions";
import { PROMISE_FAIL, PROMISE_SUCCESS } from "./queryActions";

/**
 * thunk 함수 일반화
 *    프로미스를 다루는 3단계를 추상화 합니다.
 *    (3단계 - loading,succss,fail)
 *
 * asyncFunc 라는 api 호출 함수를 wrapping 하여
 *  호출 상황에 맞게 dispatch를 날리도록 꾸며주는 역할
 */
export const createAsyncThunk = (type, asyncFunc) => {
  const [sucessType, failType] = [
    `${type}${PROMISE_SUCCESS}`,
    `${type}${PROMISE_FAIL}`,
  ];

  return (params) => async (dispatch, getState) => {
    const cacheKey = `${type}${JSON.stringify(params || "")}`;
    dispatch({ type });
    try {
      const cache = getState()?.cache[cacheKey];
      if (cache) {
        dispatch({ type: sucessType, payload: { data: cache } });
      } else {
        const result = await asyncFunc(params); //
        dispatch({ type: sucessType, payload: { data: result } });
        dispatch({
          type: CACHE_WRITE,
          payload: { key: cacheKey, data: result },
        });
      }
    } catch (error) {
      dispatch({ type: failType, payload: { error } });
    }
  };
};
/**
 * 객체를 생성하는 함수를 묶음
 */
export const createAsyncActionState = {
  init: (initData = null) => ({ loading: false, data: initData, error: null }),
  loading: (prevData = null) => ({
    loading: true,
    data: prevData,
    error: null,
  }),
  sucess: (data) => ({ loading: false, data, error: null }),
  fail: (error) => ({ loading: false, data: null, error }),
};

/**
 * type - 연관 3개의 타입을 처리할 수 있도록 서브 리듀서 함수를 만들었음
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_FAIL: 
 */
export const reduceAsyncAction = (type, key, options = {}) => {
  const [sucessType, failType] = [
    `${type}${PROMISE_SUCCESS}`,
    `${type}${PROMISE_FAIL}`,
  ];
  const { keepData } = options;

  return (state, action) => {
    switch (action.type) {
      case type: {
        return {
          ...state,
          [key]: createAsyncActionState.loading(
            keepData ? state[key].data : null
          ),
        };
      }
      case sucessType: {
        return {
          ...state,
          [key]: createAsyncActionState.sucess(action.payload.data),
        };
      }
      case failType: {
        return {
          ...state,
          [key]: createAsyncActionState.fail(action.payload.error),
        };
      }
      default:
        return state;
    }
  };
};
