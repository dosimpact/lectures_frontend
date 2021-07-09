// eg) options 설정
const options = {
  //   root: document.querySelector(".container"), // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
  rootMargin: "100px",
  // rootMargin을 '100px 100px 100px 100px'로 설정
  // 대상 객체가 안보여도, 100px나 일찍 관찰(?)된다.
  threshold: [0, 0.5, 1],
  // 타겟 엘리먼트가 교차영역에 진입했을 때,
  // 교차영역에 타켓 엘리먼트의 50%가 있을 때,
  // 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
};

// IntersectionObserver 생성
const io = new IntersectionObserver((entries, observer) => {
  // IntersectionObserverEntry 객체 리스트와 observer 본인(self)를 받음
  // 동작을 원하는 것 작성
  entries.forEach((entry) => {
    // entry와 observer 출력
    // 1. entry 관찰 대상의 El가 보이는지,교차되었는지
    console.log("entry:", entry);
    console.log("observer:", observer);
    // 2. entry.isIntersecting 가 보이는 유무
    if (entry.isIntersecting) {
      console.log("is in viewport!");
    } else {
      console.log("is gone...:(");
    }
  });
}, options);

document.querySelectorAll(".box").forEach((node) => {
  io.observe(node);
});
// eg) IO 객체 등록/해체/clear/관찰배열

// io.observe(Element)
// 관찰할 객체 등록
// io.unobserve(Element)
// 타켓 객체 관찰 멈춤 (lazyloading 종료시 끝)
// io.disconnect(Element)
// 모든 관찰 객체를 헤체
// io.takeRecords()
// IntersectionObserverEntry 객체의 배열을 리턴
