import {
  put,
  delay,
  takeLeading,
  takeEvery,
  takeLatest,
  getContext,
} from "redux-saga/effects";
import {
  flagDown,
  flagUp,
  FLAG_UP_ASYNC,
  FLAG_DOWN_ASYNC,
  FLAG_UPDOWN_TAKE_EVERY,
  FLAG_UPDOWN_TAKE_FIRST,
  FLAG_UPDOWN_TAKE_LAST,
  SOME_LOGIC_NEED_FALL_BACK,
} from "./actions";

// 특정 액션이 발생시- 처리하는 제너레이터
function* handleFlagUpSaga(action) {
  yield delay(Math.ceil(Math.random() * 1000 + 500));
  yield put(flagUp());
}

function* handleFlagDownSaga(action) {
  yield delay(Math.ceil(Math.random() * 1000 + 500));
  yield put(flagDown());
}

function* handleFlagUpDownSaga(action) {
  const isUp = action.payload.isUp;
  yield delay(Math.ceil(Math.random() * 1000 + 500));

  if (isUp) {
    yield put(flagUp());
  } else {
    yield put(flagDown());
  }
}
// function* handleFlagUpDownSagaFirst(action) {}
// function* handleFlagUpDownSagaLast(action) {}

function* goToSomeWhere(action) {
  const url = action.payload.fallbackUrl || "/";
  const history = yield getContext("history");
  history.push(url);
}

// flag 관련 액션들을 관찰하도록, 등록하는 제너레이터 함수
export function* flagSaga() {
  yield takeEvery(FLAG_UP_ASYNC, handleFlagUpSaga);
  yield takeLatest(FLAG_DOWN_ASYNC, handleFlagDownSaga);
  //
  yield takeEvery(FLAG_UPDOWN_TAKE_EVERY, handleFlagUpDownSaga);
  yield takeLeading(FLAG_UPDOWN_TAKE_FIRST, handleFlagUpDownSaga);
  yield takeLatest(FLAG_UPDOWN_TAKE_LAST, handleFlagUpDownSaga);
  //

  yield takeLatest(SOME_LOGIC_NEED_FALL_BACK, goToSomeWhere);
}
