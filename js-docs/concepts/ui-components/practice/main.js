// 상태
// 슬라이드 요소 수:number, 현재 슬라이드 인덱스:number

// 기능
// setSlideIndex

// 이벤트
// 버튼 클릭
// (+스크롤)

/**
window.addEventListener("scroll",(e)=>{
    console.log("scroll event",e.target)})
 */

// 전체 페이지의 스크롤 이벤트는 누가 담당하는가 ?

// ✅ window객에 걸면 이벤트가 나온다.
// <!DOCTYPE html><html/>...
window.addEventListener("scroll", (e) => {
  console.log("scroll event", e.target);
});

// ✅ 문서 전체에 걸어도 동일
// <!DOCTYPE html><html/>...
window.document.addEventListener("scroll", (e) => {
  console.log("scroll event", e.target);
});
//❌ 하지만 html에 걸면 이벤트 발생 안함,
// 정작 scroll을 감추는건 html 의 css로 가능한데..?
// <html />
window.document.documentElement.addEventListener("scroll", (e) => {
  console.log("scroll event", e.target);
});
// ❌ body 는 당연 scroll 이벤트가 발생 안함
// <body/>
window.document.body.addEventListener("scroll", (e) => {
  console.log("scroll event", e.target);
});

// ✅ 개별요소에 scroll 이벤트 거는 경우
document
  .querySelector("#leftmenuinnerinner")
  .addEventListener("scroll", (e) => {
    console.log("scroll event", e.target);
  });
