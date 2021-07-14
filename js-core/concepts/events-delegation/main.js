//eg) 이벤트 버블링
// bottom up 방향으로 전달된다.

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log("이벤트 버블링 : ", e.currentTarget.className);
  });
});

// eg) 이벤트 캡쳐링
// top down 방향으로 전달된다.

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      //   console.log("이벤트 캡쳐링 : ", e.currentTarget.className);
    },
    { capture: true }
  );
});

// eg) 이벤트 캡쳐링,버블링 방지
// 기존
// 1 -> 2 -> 3 -> 2 -> 1
// 캡쳐링 방지
// [1] -|
// 버블링 방지
// 1 -> 2 -> [3] -|
// 캡쳐링 버블링 같이하니까 캡쳐링만 되는군.

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      console.log(
        "이벤트 캡쳐링 stopPropagation : ",
        e.currentTarget.className
      );
      e.stopPropagation();
    },
    { capture: true }
  );
});

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log("이벤트 버블링 stopPropagation : ", e.currentTarget.className);
    e.stopPropagation();
  });
});

// eg) 이벤트 위임
