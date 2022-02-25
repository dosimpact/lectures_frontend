var slideWrapper = document.querySelector(".slide-wrapper");
var slideContainerEl = document.querySelector(".slide-container");
var prevBtnEl = document.querySelector(".prevBtn");
var nextBtnEl = document.querySelector(".nextBtn");
//현재 인덱스, 갯수
var currentIdx = 0;
var slideCount = slideContainerEl.childElementCount;
slideWrapper.style.width = 310 * 3 - 10 + "px";
// slideContainer.style.left = "-100px";

function setSlideIdx(num) {
  slideContainerEl.style.left = `-${310 * num}px`;
}

nextBtnEl.addEventListener("click", () => {
  if (currentIdx < slideCount - 3) {
    setSlideIdx(currentIdx + 1);
    currentIdx += 1;
  } else {
    setSlideIdx(0);
    currentIdx = 0;
  }
});
prevBtnEl.addEventListener("click", () => {
  if (0 < currentIdx) {
    setSlideIdx(currentIdx - 1);
    currentIdx -= 1;
  } else {
    setSlideIdx(slideCount - 3);
    currentIdx = slideCount - 3;
  }
});
