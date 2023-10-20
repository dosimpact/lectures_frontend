import { CACHE_EXPIRE, CACHE_WRITE } from "./cacheActions";

export const cacheReducer = (state = {}, action) => {
  const payload = action.payload;
  switch (action.type) {
    case CACHE_EXPIRE:
      return {
        ...state,
        [payload.key]: null,
      };
    case CACHE_WRITE: {
      if (payload.key) {
        return {
          ...state,
          [payload.key]: payload.data,
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};
