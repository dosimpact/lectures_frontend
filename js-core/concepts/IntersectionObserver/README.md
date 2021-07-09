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
