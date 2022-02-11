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
    // 2. entry.isIntersecting 가 보이는 유무
    if (entry.isIntersecting) {
      console.log("is in viewport!");
    } else {
      console.log("is gone...:(");
    }
    // 2.1 좌표 정보 ( getBoundClientRect 와 같은 정보를 반환)
    // 순서대로 , 타겟의-A, root의-B=Viewport, 교차된 영역의(intersection element)(A 교 B)
    // boundingClientRect: DOMRectReadOnly {x: 208, y: -157.5625, width: 300, height: 200, top: -157.5625, …}
    // rootBounds: DOMRectReadOnly {x: -100, y: -100, width: 1022, height: 925, top: -100, …}
    // intersectionRect: DOMRectReadOnly {x: 208, y: -100, width: 300, height: 142.4375, top: -100, …}

    // 2.2 교차 정보
    // isIntersecting: true
    // 교차 여부
    // intersectionRatio: 0.7121875286102295
    // threshold 와 비슷 ( 0~1 )사이의 값으로 얼마나 교차되었는지에 대한 정보

    // 2.3 그외 정보
    // isVisible: false
    // target: div.box
    // 타켓 엘리먼트 객체 반환
    // time: 76.5
    // 교차가 기록된 시간 반환
  });
  // 3. observer 객체(설정값이 나온다.)
  console.log("observer:", observer);
  // delay: 0
  // root: null
  // rootMargin: "100px 100px 100px 100px"
  // thresholds: (3) [0, 0.5, 1]
  // trackVisibility: false
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
