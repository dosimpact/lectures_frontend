# 01

## 스크롤 Reveal 애님 알고리즘

1. 애니메이션 header 파일 추가 ( keyfremes 프리셋들)
2. 스크롤 이벤트를 document에 건다.
3. getBoundingClientRect 와 window.innerHeight/width 을 이용해서 isElementInViewport 을 작성
4. 뷰포트에 있다면, 클래스를 추가해서 애니메이션 실행

- 특정 요소가 화면 안에 다 들어왔는지 여부

```js
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
```

# 02

## 크기,너비,좌표

목적 : 브라우저 화면의 높이과 너비를 구하자
목적 : 브라우저 스크롤의 yoffset을 구하자

```js
const app = document.getElementById("app");
const updateOffectInfo = (e) => {
  app.innerHTML = `
    높이 : 
    window.innerHeight : ${window.innerHeight} 
    document.documentElement.clientHeight : ${document.documentElement.clientHeight}
    <br/>
    너비 :
    window.innerWidth : ${window.innerWidth}
    document.documentElement.clientWidth : ${document.documentElement.clientWidth}
    <br/>
    오프셋 : 
    window.pageYOffset : ${window.pageYOffset}

    `;
};
updateOffectInfo();
document.addEventListener("scroll", updateOffectInfo);
```

## 03 IO

- IntersectionObserver 생성
- 관찰 대상 객체 등록,해체,전부해체,대상객체들리턴

[http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/](http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/)

## IO알고리즘

- intersectionObserver 옵션과 함께 생성
- 관찰할 엘리먼트 등록
- 관찰한 결과 리턴

```js
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
```

## 04 lazyLoad

[http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/](http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/)

## Lazy-Loading 예제 알고리즘

- img 태그는 src속성에 주소값이 들어오면 데이터를 받아오기 시작한다.
- lazyload을 위해서 , 화면에 보여줬을때만 src에 할당해야 한다.
- data-src 속성에 주소값을 미리 두자.

* HTML5의 속성중 "data-\*" 어트리뷰트는 Element.dataset 으로 참조 가능하다.

```js
document.querySelectorAll(".image")[0].dataset
DOMStringMap {alt: "possible", src: "https://picsum.photos/600/400/?random?1"}
```

- isIntersecting 이 참이라면, data-src 에서 src로 옮겨 주자.

```js
const options = {
  rootMargin: "200px",
  threshold: [0],
};

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("is in viewport!");
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
      // observer.unobserve(entry);❌
      // io.unobserve(entry.target);❌
    }
  });
}, options);

document.querySelectorAll(".image").forEach((node) => {
  io.observe(node);
});
```
