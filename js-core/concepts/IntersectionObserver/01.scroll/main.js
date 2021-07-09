// 해당 요소가 viewport 내에 있는지 확인하는 함수
// 대표적인 예시로 사용되고 있는 stackoverflow의 예시를 가져왔습니다.
// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// scroll 이벤트를 추가하고, 해당 element에 callback 함수를 등록하는 함수
const addEventToEl = (elList) => {
  document.addEventListener("scroll", () => {
    elList.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("tada");
      } else {
        el.classList.remove("tada");
      }
    });
  });
};

// 동작시킬 elements리스트에 이벤트를 등록
const boxElList = document.querySelectorAll(".box");
addEventToEl(boxElList);
