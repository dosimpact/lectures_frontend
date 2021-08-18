// eg) 이벤트 캡쳐링,버블링 방지
// 기존
// 1 -> 2 -> 3 -> 2 -> 1
// 캡쳐링 방지
// [1] -|
// 버블링 방지
// 1 -> 2 -> [3] -|
// * 캡쳐링 버블링 같이하니까 캡쳐링만 되는군.

// 버블링 전파 방지
// 버블링 + e.stopPropagation 은 target === currnetTarget 의 특성
document.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log("버블링(전파): currentTarget ", e.currentTarget.className);
    console.log("버블링(근원): target ", e.target.className);
    e.stopPropagation();
  });
});
