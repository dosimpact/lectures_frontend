## 알고리즘

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
