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
