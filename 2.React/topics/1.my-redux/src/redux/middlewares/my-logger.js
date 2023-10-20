/**
 * middlewares
 * store, next, action 을 주입받아서 컨텍스트가 이어진다.
 *
 * store : 인스턴스 ref
 * next : next(action) 형태로 다음 미들웨어/리듀서 에게 전달
 * action : 현재 처리중인 액션객체
 */

const myLogger = (store) => (next) => (action) => {
  console.log("myLogger : action ", action);
  const result = next(action);
  return result;
};

export default myLogger;
