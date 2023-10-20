// helpers.js 함수

// 쿼리설렉터 래퍼, scope디폴트값을 갖는다.
export function qs(selector, scope = document) {
  if (!selector) throw "selector need";
  return scope.querySelector(selector);
}
export function qsAll(selector, scope = document) {
  if (!selector) throw "selector need";
  return Array.from(scope.querySelectorAll(selector));
}

// 이벤트 핸들러 등록
export function on(target, eventName, handler) {
  return target.addEventListener(eventName, handler);
}
// 이벤트 위임 리스너
export function delegate(target, eventName, selector, handler) {
  const emitEvent = (e) => {
    const potentialElements = qsAll(selector, target);
    for (let potentialElement of potentialElements) {
      if (e.target === potentialElement) return handler.call(e.target, e);
    }
  };
  on(target, eventName, emitEvent);
}
// 커스텀 이벤트 발생
export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}
// 날짜 하루 차이나게 구하기
export function formatRelativeDate(data = new Date()) {
  //  ~ 10초 | ~ 1분 | ~ 1시간 | ~하루 | 시각
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;
  const diff = new Date() - data;
  if (diff < TEN_SECOND) return "방금전";
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return diff.toLocaleString("ko-KR", {
    dateStyle: "medium",
    hour12: false,
  });
}
// 과거 날짜 변환
export function createPastDate(diffDay = 1, now = new Date()) {
  if (diffDay < 1) throw "diffDay must be < 1";
  return new Date(now.setDate(now.getDate() - diffDay));
}
// 인덱스카운터
export function createNextId(list = []) {
  return Math.max(...list.map((l) => l.id)) + 1;
}

export function Logger(cls) {
  const tag = cls.name;
  return {
    log: (msg = "") => console.log(`✔️[${tag}]${msg}`),
    warn: (msg = "") => console.log(`⚠️[${tag}]${msg}`),
    error: (msg = "") => console.log(`❌[${tag}]${msg}`),
  };
}
