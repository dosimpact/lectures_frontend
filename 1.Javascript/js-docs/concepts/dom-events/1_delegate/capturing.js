// eg) 이벤트 캡쳐링
// top down 방향으로 전달된다.

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      console.log("캡처링(전파): currentTarget ", e.currentTarget.className);
      console.log("캡처링(근원): target ", e.target.className);
    },
    { capture: true }
  );
  // 다르게는 3번째 인자는 boolean 값을 받을 수 있는데, 이는 useCapture 옵션 on/off 이다.
  // el.addEventListener("click", (e) => {}, true);
});
