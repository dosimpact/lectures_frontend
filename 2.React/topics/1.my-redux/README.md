# Redux Tutorials

@Index

- [ ] Redux Concepts

  - [ ] install
  - [ ] Redux 구성
    - [ ] 3대 규칙

- [ ] redux & react-redux

  - [ ] Settings(DuckPattern & combineReducer)
  - [ ] connect HOC 함수

- [ ] middleWares

  - [ ] myLogger.js
  - [ ] redux-devtools-extension
  - [ ] redux-thunk

    - [ ] thunk Basic
    - [ ] 프로미스 thunk 다루기
    - [ ] thunk 리팩토링 - (1) 함수분리하기
    - [ ] thunk 리팩토링 - (2) 캐시처리하기

  - [ ] redux-saga
  - [ ] react-router-redux

- [ ] Addon
  - [ ] subReducer - immer
  - [ ]

@Appendix

- [ ] ContextAPI

  - [ ] Provider & useContext

---

# Redux Concepts

## install

```
yarn add redux react-redux
yarn add immer
yarn add redux-devtools-extension redux-logger redux-thunk redux-saga

yarn add react-router-dom react-router-redux
```

## Redux 구성

Action

    객체
    {type:String,payload:Object}

Action Creator

    액션(객체)을 만드는 함수

Reducer

    상태를 변화 시키는 함수
    인자로 상태,액션 받아서 액션에 맞는 상태로 변환

Store

    리듀서 + 현재의 앱 상태

    dispatch
        스토어의 내장함수, 액션을 발생시키는 것

    subscribe
        스토어의 내장함수, 액션 디스패치시 구독함수 호출

### 3대 규칙

1. 하나의 app에는 하나의 스토어가 존재
2. 상태는 읽기 전용(불변성 유지)
3. 리듀서는 순수함수, 비수순수 로직은 미들웨어로 실행할 것

# redux & react-redux

## Settings(DuckPattern & combineReducer)

```

Pages /
  AppName /
    state           # 특정 페이지 단위별로 상태관리를 하고자 함 (DuckPattern)
      actions.js    # 액션,액션크리에이터 정의
      reducer.js    # 리듀서 정의
      sage.js       # 사가
      selectors.js  # 리설렉터


```

```js
//store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../Pages/Couter/state/reducer";
import todoReducer from "../Pages/Todo/state/reducer";

import reduxLogger from "redux-logger";
import myLogger from "./middlewares/my-logger";

/* rootReducer , middleWares  */
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, reduxLogger))
);

// index.js - Provider
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### useSelector

useSelector는 스토어의 상태를 가져와 구독하고 있다.
useSelector의 인자는 함수이고, 이 함수가 리턴하는 값이 같다면 리랜더링은 방지된다.  
아래의 코드처럼 매번 새로운 객체를 리턴하게 된다면, 무조건 리랜더링 되는 코드다.

```js
// 문제의 코드 --> 최적화가 필요함
const { number, diff } = useSelector((state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
}));

// 개선 -1
const number = useSelector((state) => state.counter.number);
const diff = useSelector((state) => state.counter.diff);
// 개선 -2
const { number, diff } = useSelector(
  (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }),
  shallowEqual
);
```

# middleWares

액션 리듀스 작업 외 추가 작업들은 미들웨가 책임진다.

    특정 조건에 따라 액션이 무시되게

    액션을 콘솔에 출력하거나, 서버쪽에 로깅

    액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달

    특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생

    특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행

## myLogger.js

```js
const myLogger = (store) => (next) => (action) => {
  console.log("-->myLogger action", action);
  const result = next(action);
  console.log("-->myLogger result", result);
  return result;
};

export default myLogger;
```

## redux-devtools-extension

리덕스 상태를 개발자 도구로 관찰하기 위함

```js
//yarn add redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
```

## redux-thunk

기존의 액션은 객체지만, **thunk미들웨어를 사용하여, 비동기함수 타입의 액션을 처리**하도록 한다.  
thunk는 비동기 함수를 리턴하는 액션 크리에이터 함수다.

예를들어, 데이터를 가져오는 액션(비동기 함수)을 dispatch 하면  
하나의 비동기 함수가 처리되는 동안 -> Loading,Success,Error 등의 액션(객체)을 묶어서 처리할 수 있다.

커스텀 미들웨어(로거) 에서 봤듯이, 미들웨어는 store,next,action 의 맥락을 가졌다.  
thunk 미들웨어에서는 store.dispatch 와 store.getState 를 외부로 위임하고  
next에 대한 책임을 진다.

그래서 thunk 는 ( 비동기 함수 액션 크리에이터) dispatch,getState 인자로 받는 함수가 된다.

### thunk Basic

eg)

    todo 1개를 추가 디스패치는 -> 영,중 번역 요청 후 총 3개의 투두를 추가하는 디스패치로
    비동기작업과 추가로 다른 thunk(서버로그)를 호출하는 로직

```js
import ReduxThunk from "redux-thunk";

const rootMiddleWares = [
  //myLogger,
  reduxLogger,
  ReduxThunk,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...rootMiddleWares))
);

export default store;

// 1. thunk 정의
// 그냥 async 함수를 정의해주면 된다.
// async ( dispatch, getState) => {...}
export const addTodoWithI18N =
  ({ content }) =>
  async (dispatch, getState) => {
    const todo = getState().todo;
    const len = todo.length;
    const [en, cn] = await Promise.all([transEN(content), transCN(content)]);
    dispatch(addTodo({ content }));
    dispatch(addTodo({ content: en }));
    dispatch(addTodo({ content: cn }));
    dispatch(writeServerLogAsync({ log: "addTodo" }));
  };

// 2. thunk dispatch
const handleI18Todo = () => {
  dispatch(addTodoWithI18N({ content: "안녕" }));
};
```

thunk 미들웨어를 사용하므로, thunk 함수 안에서 - 액션 객체,함수 모두 dispatch를 날릴 수 있다.

### 프로미스 thunk 다루기

thunk 로 서버State 동기화를 위해 유틸함수를 만들어 보자.

- GET_POST, GET_POST_SUCCESS, GET_POST_ERROR 을 GET_POST 의 하위 액션들로 보는 관점
- 리듀서에서 하위 리듀서 함수를 만들어 위임하는것이 가능

아래의 3단계로 서버에서 데이터를 가져와 상태를 로컬에 저장하도록 , thunk를 정의할 수 있다.

```js
// 1. 액션 정의
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

// 2. thunk 함수 정의
export const getPost =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: GET_POST });
    try {
      const post = await getPostById({ id });
      dispatch({ type: GET_POST_SUCCESS, payload: { data: post } });
    } catch (error) {
      dispatch({ type: GET_POST_FAIL, payload: { error } });
    }
  };

import { GET_POST, GET_POST_FAIL, GET_POST_SUCCESS } from "./queryActions";

// 3. reducer 정의
const initState = {};

export const queryReducer = (state = initState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        post: {
          loading: true,
          error: null,
          data: null,
        },
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        post: {
          loading: false,
          error: null,
          data: payload.data,
        },
      };
    }
    case GET_POST_FAIL: {
      return {
        ...state,
        post: {
          loading: false,
          error: payload.error,
          data: null,
        },
      };
    }
    default:
      return state;
  }
};
```

### thunk 리팩토링 - (1) 함수분리하기

Promise 상태에 따른, 3가지 State 가 존재 ( Start -> Success | Fail )

목적 : api.getPost() 을 호출했는데, Redux에 상태별로 상태가 동기화 되도록 하기

1. 액션을 3개 만들어야 한다. -> 상수로 직접 명세
2. thunk 함수 로직이 동일 하다 -> api함수를 받아서 시작,성공,실패 로직은 추상화 가능  
   -> createAsyncThunk
3. 액션 3개에 따른 리듀서 로직도 늘어났다. -> 서브 리듀서로 추상화 하여 위임하기  
   -> createAsyncActionState,reduceAsyncAction

추상화 함수

```js
import { PROMISE_FAIL, PROMISE_SUCCESS } from "./queryActions";

/**
 * thunk 함수 일반화
 *    프로미스를 다루는 3단계를 추상화 합니다.
 *    (3단계 - pending,succss,fail)
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
    dispatch({ type });
    try {
      const result = await asyncFunc(params);
      dispatch({ type: sucessType, payload: { data: result } });
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
  pending: () => ({ loading: true, data: null, error: null }),
  sucess: (data) => ({ loading: false, data, error: null }),
  fail: (error) => ({ loading: false, data: null, error }),
};

/**
 * type - 연관 3개의 타입을 처리할 수 있도록 서브 리듀서 함수를 만들었음
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_FAIL: 
 */
export const reduceAsyncAction = (type, key) => {
  const [sucessType, failType] = [
    `${type}${PROMISE_SUCCESS}`,
    `${type}${PROMISE_FAIL}`,
  ];

  return (state, action) => {
    switch (action.type) {
      case type: {
        return {
          ...state,
          [key]: createAsyncActionState.pending(),
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
```

적용하기

```js
export const GET_POST_KEY = "post";
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

export const getPostV2 = createAsyncThunk(GET_POST, getPostById);

const initState = {
  [GET_POST_KEY]: createAsyncActionState.init(),
};

export const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_FAIL: {
      return reduceAsyncAction(GET_POST, GET_POST_KEY)(state, action);
    }
    default:
      return state;
  }
};

// dispatch
dispatch(getPostV2({ id: 1 }));
```

### thunk 리팩토링 - (2) 캐시처리하기

Posts API

    API 호출 후 Post 데이터는 리덕스에 남아있다(이것만으로도 캐싱처리가 된것 )
    loading -> 이전의 상태를 유지하도록 하자 -> 새로운 데이터가 오면 조용히 업데이트 해주자.

Post API

    Post 는 인자값으로 id를 가진다. 그래서 id별로 key값 취급 후 캐싱을 처리해야한다.
    이를 구현하기 위해 캐시 리듀서를 만들고, thunk 함수에서 조회하도록 한다.
    이후에 cache expire은 saga로 구현해 보자.

1. 캐시 - 액션 정의
2. 캐시 - 리듀서 정의
3. 캐시 적용하기 - 다른 thunk 함수에

```js
// 1. 캐시 - 액션 정의
export const CACHE_WRITE = "CACHE_WRITE";
export const CACHE_EXPIRE = "CACHE_EXPIRE";

export const cacheWrite = (key, data) => {
  return {
    type: CACHE_WRITE,
    payload: { key, data },
  };
};

export const cacheExpire = (key) => {
  return {
    type: CACHE_EXPIRE,
    payload: { key },
  };
};

// 2. 캐시 - 리듀서 정의
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

// 3. 캐시 적용하기 - createAsyncThunk
// - dispatch 3개를 다루는 Thunk 함수에서 캐시를 조회 하도록 하였다.
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
```

## redux-saga

redux-thunk 외 작업 처리

    비동기 작업을 할 때 기존 요청을 취소 처리
    특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행
    웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리  (참고)
    API 요청이 실패했을 때 재요청하는 작업

--

@Appendix

# ContextAPI

## Provider & useContext

```js
//1. Provider 정의
import { createContext } from "react";

const PostContext = createContext({
  page: null,
  setPage: null,
  totalPage: null,
  postQuery: null,
  postsQuery: null,
  handleGetPostById: null,
});

export default PostContext;

//2. Provider 값 할당

const ViewModel = () => {
   ...

  return (
    <PostContext.Provider
      value={{
        page,
        setPage,
        totalPage: postsCounter,
        postQuery,
        postsQuery,
        handleGetPostById,
      }}
    >
      <View />
    </PostContext.Provider>
  );
};
```
