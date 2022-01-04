# ✨프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 1

# Intro

## 앞으로 배울 것들

- [ ] 브라우저의 랜더링 원리

- [ ] 분석 툴  
       Performance 패널 분석  
       Lighthouse 패널 분석  
       Network 패널 분석  
       webpack-bundle-analyzer 이용한 분석

- [ ] 리소스 핸들링  
       텍스트 압축  
       이미지 사이즈 압축  
       적절한 사이즈 변환  
       이미지 CDN 최적화  
       리소스 캐싱  
       이미지 preload  
       컴포넌트 preload.  
       Component Lazy load  
       React code Splitting.  
       Image Lazy Load.  
       병목 코드 제거  
       repaint, reflow 줄이기

## 웹성능 결정 요인

\*결국 모든 성능은 2가지로 귀결

1. ✅ 로딩 성능

- 리소스 불러오는 성능
- 이를 위해 통신에 대해 알아야함
- preload, lazyload, 캐싱, 압축 등의 기술 사용

2. ✅ 랜더링 성능

- 불러온 리소스를 얼마나 빠르게 그리는지
- 브라우저의 동작원리를 알아야 한다.

# 1장. 블로그 사이트 최적화

### 실습 내용

[ ] 로딩성능 최적화  
 -[ ] 이미지 사이즈 최적화  
 -[ ] 코드 스플릿  
 -[ ] 텍스트 압축

[ ] 랜더링 성능 최적화  
 -[ ]**Bottleneck** 코드 최적화

### 분석 툴 소개

크롬 - 개발자 도구 탭

- 네트워크 탭
- 퍼포먼스 탭
- 라이트하우스 (구 Audits) 탭

웹팩 번들러 애널라이저

- JS 번들링 결과가 어떤지 보여주는 플러그인

### lecture-1 코드 실행

```
yarn install
yarn start && yarn server
```

라이트 하우스 실행 후 스코어가 나온다.

- Opportunities 항목 : 로딩 관점에서 개선시킬 부분들
- Diagnostics 항목 : 웹브라우저 퍼포먼스 관점에서 개선시킬 부분들

## 1-5 이미지 사이즈 최적화

**이슈 : Properly size images**

랜더링 되는 앨리먼트의 크기와 이미지 사이즈를 맞추자

- 래티나 디스플레이는 같은 픽셀크기에 2배 해상도를 그리는 디스플래이가 있다.
- 그래서 120X120 공간은 2배큰 240X240 을 그려주도록 하자.

자체 서버에서 이미지를 제공해주는 경우 -> 직접 잘라도 된다.  
외부 서버에서 이미지를 제공해 주는 경우  
==> CDN 기능 + resize 기능이 있는 서비스 이용  
이를 image processing CDN 이라고 한다.  
eg) https://imgix.com/ 라는 솔루션 이용

여기서는 unsplash 에서 이미지를 가져오므로, 파라미터만으로 쉽게 해결 했다.

**이슈 : Minify JavaScript**
해결 : JS파일을 압축해  
-> 여기서는 CRA 환경이므로 build시 알아서 줄어들게 된다.

## 1-6) bottleneck 코드 탐색

퍼포먼스 탭으로 이동

- 새로고침과 동시에 퍼포먼스를 측정할 수 있음.
- 프레임단위로 분석이 된 차트를 볼 수 있음

Network : 어떤 파일들을 얼마의 시간으로 받아 오는가 ?
Timings : DCL, FP, FCP, L 에 대한 시점을 보여준다.

- DCL : DOM Content Load Event : 파일 로딩 완료
- FP : First Paint : 첫 픽셀이 그려짐
- FCP : Frist Contentful Paint : 사용자에게 유의미한 화면이 그려지는 시점
- L : Onload Event , 이벤트 로직 작동

Main : 메인 스레드에서 어떤 JS가 실행되는지 보여준다.

- removeSpecialCharacter 라는 함수작업이 오래 걸린다.
- 그에 따라 MinorGC ( 가비지 콜렉터 ) 도 여러번 작동이 되었다.

해결하기 :

1. removeSpecialCharacter 에서 이중for문이 있다. 이를 replace + 정규식으로 변경
2. 페이지 특성상 마크다운 미리보기 이므로, 문자열을 300개 정도만 보여주면 된다.  
   substring 을 통해 파싱하는 양 대폭 줄이기

추가 자료

React - reconciliation

- diffing 알고리즘 (3)
  https://ko.reactjs.org/docs/reconciliation.html
- hydration
  https://en.wikipedia.org/wiki/Hydration_(web_development)
- web Rendering
  https://developers.google.com/web/updates/2019/02/rendering-on-the-web

## 1-8) bundle 파일 분석 (bundle-analyzer)

### bundle-analyzer 설치

cra build 이후 거대한 bundle.js 가 나오게 된다.  
이를 분석하기 위해서, webpack의 플러그인을 설치하자.  
https://www.npmjs.com/package/webpack-bundle-analyzer  
하지만 CRA 환경이라, 이를 eject 하거나 혹은 config를 덮어쓸수있는 작업을 해야 하지만  
CRA 환경에서도 번들을 분석해줄 패키지가 다행이 있다.  
https://www.npmjs.com/package/cra-bundle-analyzer

### 번들 리포트 분석하기

그 결과 react-dom, refractor 등의 큰 규모의 js 코드들을 볼 수 있다.  
( refractor 하위에는 php,pug,c# 등등 언어마다 하이라이팅 해주는 js코드들이 있고 사이즈가 매우 크다. )  
package.json.lock 을 통해 신텍스 하이라이터라는 마크다운 라이브러리의 의존성 패키지가 refactor 임을 알았다.  
그리고 블로그의 메인페이지에서는 마크다운을 위한 하이라이터는 필요가 없으므로  
나중에 js 파일을 받아도 된다고 판단하였다.

## 1-9) Code Splitting & Lazy Loading

리액트에서 코드 스플릿팅에 대한 몇가지 가이드를 해준다.  
App 특성에 맞는 선택지를 고르자.
https://ko.reactjs.org/docs/code-splitting.html

- 페이지 단위의 스플릿팅, 모듈별로 스플릿팅
- import() 라는 구문은 webpack이 처리한다.
- code spliting 역시 리액트의 기능이 아닌 webpack의 기능이다.
- 적용은 매우 간단하다. react-router-dom 기준 코드 분할을 해보자.
- import(),lazy,Suspense,fallback 의 문법으로 쉽게 가능
- 페이지를 들어갈때야 비로소 js 파일을 fetching 하는것을 확인
- ? pre-fetch 기능은 어떻게 사용할까?!!(다음을 참고하자)
  > https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d

```js
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩 중...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
```

## 1-10) 텍스트 압축 적용

CRA build 후, Network tab을 살펴보자.  
api 호출 후 json 파일의 응답헤더는 다음처럼 적혀 있다.

- Content-Encoding: gzip ==> 알게모르게 압축 후 데이터를 전송했었다.

참고) 웹상에서 텍스트 압축

1. GZIP : 블럭화, 휴리스틱 필터링, 헤더와 체크썸, 내부적으로 Deflate을 사용하는 파일 포멧
2. Deflate : LZ77, 퍼프만 코딩을 사용

- GZIP 이 더 좋은 효율을 보인다.

이러한 압축제공은 서버에서 제공을 해주어야 한다.  
serve.js을 사용하는데, 여기서 다행이 옵션으로 제공함(디폴트=압축적용함)

참고로 대규모 서비스에서는 라우터에서 텍스트 압축 기능을 제공해줄 수 있다.

모든 파일들을 무분별하게 압축을 하면, 클라이언트에서 압축을 해제하는 시간이 더 걸린다.  
파일의 크기가 2KB이상이면 인코딩하여 전달 한다.
eg) 156 -> 49 KB : gzip 많이 줄어든다.

---

# 2장. 통계 사이트 최적화

실습내용

[ 랜더링성능최적화 ]

- [ ] 애니메이션 최적화 (Reflow,Repaint).

[ 로딩성능최적화 ]

- [ ] (페이지내)컴포넌트 Lazy Loading(codeSplitting).
- [ ] 컴포넌트 PreLoading.
- [ ] 이미지 PreLoading.

## 2-3) 애니메이션 분석 (Reflow와 Repaint 이론)

퍼포먼스 탭에서 CPU 스로틀링을 X6으로 만들고 width을 조절하는 애니메이션을 레코딩 해보자.  
쟁크 현상 : 60프레임으로 리랜더링을 못해 버벅이는 현상

브라우저의 렌더링 과정

1. DOM+CSSOM 트리 만들기
2. 두 트리를 합쳐 Render Tree 를 만들기
3. Layout 단계 - 요소의 위치,크기 계산
4. Paint - 픽셀을 채워넣는 단계
5. Composite - 각 레이어를 합성하는 단계  
   위 5단계를 Critical Rendering Path, Pixel Pipeline 이라고 부른다.

0.016 초 안에 Critical Rendering Path 마쳐야 60FPS가 된다.

### Reflow

width,height 등의 요소의 크기가 변했을때, 크리티컬 랜더링 패스를 다시 거쳐서  
리랜더링 되는 과정을 reflow라고 한다.

### Repaint

color, background-color 색상 변화만 거치면, 5단계중 layout과정을 생략한다.

### GPU 도움으로 Reflow,Repaint 건너뛰기

**transform, opacity(GPU가 관여하는 속성) 변경**
5단계중 Layout, paint 생략된다.

변경된 코드는 다음과 같다.(width애니메이션--> transform)
transform-origin: 피봇 설정 (X Y)
transform: scaleX 크기 변경

```js
const BarGraph = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(${({ width }) => width / 100});
  transform-origin: center left;
  transition: transform 1.5s ease;
  height: 100%;
  background: ${({ isSelected }) =>
    isSelected ? "rgba(126, 198, 81, 0.7)" : "rgb(198, 198, 198)"};
  z-index: 1;
`;
```

### 애니메이션 수정 전 후 비교

프레임 드랍이 자주 발생  
보라색과 초록색영역이 많다.(reflow,repaint 자주 발생)

## 2-5) 컴포넌트 Lazy Loading (Code Splitting)

컴포넌트 단위의 lazy Loading도 어렵지 않다.  
라우터에서 했던거랑 동일하게 하면 된다.

- Lazy로딩 컴포넌트 코드

```js
import React, { useState, Suspense, lazy } from "react";
// import ImageModal from './components/ImageModal'
const LazyImageModal = lazy(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Header />
      ...
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}
```

## 2-6) 컴포넌트 Preloading

분리된 모달 컴포넌트는 필요시 JS 파일다운 + JS 실행이 된다.  
용량이 크므로 오히려 더 성능이 나빠진 효과가 발생되었다.  
그래서 컴포넌트를 미리 다운로드 받는 preloading을 거치자.

preload의 타이밍은 다음과 같다.

1. 버튼 위에 마우스를 올렸을 때
2. 최초 페이지 로드가 되고, 모든 컴포넌트의 마운트가 끝났을때

버튼 위에 마우스를 올렸을 때 코드

```js
// 버튼 위에 마우스를 올렸을 때
// import() 구문을 사용한 핸들러를 만든다.
// 이를 useEffect로 감싸면 2번 경우의 타이밍을 구현할 수 있다.
import React, { useState, useEffect, Suspense, lazy } from "react";

function App() {
  const handleMouseEnter = () => {
    const component = import("./components/ImageModal");
  };

  return (
    <div className="App">
      <ButtonModal onMouseEnter={handleMouseEnter}>
        올림픽 사진 보기
      </ButtonModal>
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}
```

최초 페이지 로드가 되고, 모든 컴포넌트의 마운트가 끝났을때(팩토리 패턴 이용)

- lazyWithPreload 라는 Hook 을 만든다.
- ()=>import() 라는 함수를 인자로 받는다. 이는 컴포넌트를 반환 하되
- preload(네트워크 fetch) 기능과 함께 리턴하는 팩토리 패턴 코드이다.

```js
import React, { useState, useEffect, Suspense, lazy } from "react";

function lazyWithPreload(importFunction) {
  const Component = React.lazy(importFunction);
  Component.preload = importFunction;
  return Component;
}

const LazyImageModal = lazyWithPreload(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    LazyImageModal.preload();
  }, []);

  return (
    <div className="App">
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }} /* onMouseEnter={handleMouseEnter} */
      >
        올림픽 사진 보기
      </ButtonModal>
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

export default App;
```

## 2-7) 이미지 Preloading

문제점 : IMG 요소가 랜더링 될떄 src속성의 url에 요청을 후 이미지를 가져온다.
모달이 뜨기도 전에 src 속성의 이미지를 미리 가져오고 싶다. (preload)  
참고) src 속성을 늦게 가져오는것은 lazyloading이다. (lazyload)

이미지를 화면에 노출하지 않아도 로드하는 방법

```
const img = new Image()
img = "url" // 이 순간 이미지가 로딩된다.
```

페이지가(컴포넌트)의 로드가 끝났을때 이미지 불러오기

- 캐시타임을 고려해서 작성을 해야한다.(360초가 걸렸다.)
- 모달창에서 첫장만 프리로드 하도록 했다.

```js
useEffect(() => {
  const img = new Image();
  img.src =
    "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800";
}, []);
```

---

## 추가(보안) - Prototype Pollution

npm 패키지 설치 도중에 critical 한 보안 취약점이 2개나 발견되었다.  
`86 vulnerabilities (57 moderate, 27 high, 2 critical)`.
무엇이 critical 한지 궁금해져서 로그를 살펴보니..

```js

merge-deep  <3.0.3
Severity: critical
Prototype pollution in Merge-deep - https://github.com/advisories/GHSA-r6rj-9ch6-g264
fix available via `npm audit fix`
node_modules/merge-deep

immer  <=9.0.5
Severity: critical
Prototype Pollution in immer - https://github.com/advisories/GHSA-33f9-j839-rf8h
Prototype Pollution in immer - https://github.com/advisories/GHSA-9qmh-276g-x5pj
fix available via `npm audit fix --force`
Will install react-scripts@5.0.0, which is a breaking change
node_modules/immer

```

모두 Prototype Pollution 때문에 파생된 이슈였다.  
prototype-pollution 취약점은 nodejs을 사용한 서버 어플리케이션이라면 반드시 고쳐야 할 항목이다.  
객체 리터럴의 proto속성을 변경하면 다른 객체 속성이 조작된다. user객체의 필드 권한을 어드민으로 override 하는 등의 공격이 가능

https://blog.coderifleman.com/2019/07/19/prototype-pollution-attacks-in-nodejs/

프로토타입 오염은 무엇일까. 방법에는 여러 가지 있겠지만 가장 기본은 객체 리터럴의 **proto**는 Object.prototype과 같다는 것을 이용해 다른 객체 속성에 영향을 주는 방식입니다.

```js
const obj1 = {};
console.log(obj1.__proto__ === Object.prototype); // true
obj1.__proto__.polluted = 1;
const obj2 = {};
console.log(obj2.polluted); // 1
위 예제에서 obj1의 프로토타입 객체를 조작했습니다. 이제 아무 관계 없는 obj2 속성의 값(obj2.polluted)이 undefined가 아니라 1로 출력됩니다.
```

발표에서는 아래와 같은 객체 프로토타입 오염이 일어날 수 있는 세 가지 패턴을 소개합니다. 모두 **proto**을 포함한 문자열을 key로 이용해 정확하지 않은 데이터를 객체에 등록 시켜 Object.prototype 오염을 노리는 방식입니다.

## A) Performance 패널 가이드

### 휴지통 모양 - Major GC 실행

마이너 GC 역시 존재

### 퍼포먼스 패널의 샐깔 의미

노란색 : JS 실행
보라색 : Layout 실행
초록색 : Paint & Composite 실행

### Network 부분에서 선의 의미

왼쪽 가느다란 선 : connection 준비
두꺼운 밝은 회색 : request 보냄
두꺼운 어두은 회색 : response 후 다운로드 시간
오른쪽 가느다란 선 : 콘텐츠 처리 메인 스레드 실행 시간

### ( 구간 ) 상세 정보

Sumary : 해당 시간동안 작업의 파이 차트
BottomUp : JS 실행 - 아래에서부터 보여줌
Call Tree : JS 실행 - 위에서부터 보여줌

### Paint와 관련된 옵션 on

프레임 단위를 클릭하면
어던 레이어가 계층적으로 구성이 되는지 확인 가능

페인트 작업 클릭하면
레이어 단계 이후, 어떤 단계로 만들어지는지 보여준다.

---

# 프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 2

## 강의 대상

성능 최적화는 훈련이다.

- 직접 사이트를 보면서 고민

## 앞으로 배울 것들

- [ ] 분석 툴  
       Performance 패널 분석  
       Lighthouse 패널 분석  
       Network 패널 분석  
       webpack-bundle-analyzer 이용한 분석  
       Coverage 패널 분석.  
       React Developer Tools 활용 분석.  
       Redux DevTools 활용 분석.

- [ ] 리소스 핸들링  
       이미지 - 지연로딩,사이즈 최적화.  
       동영상 - 사이즈 최적화.  
       폰트 최적화.  
       캐시 최적화.  
       CSS 불필요 요소 제거.  
       Layout Shift 피하기.

- [ ] 리액트 특화 최적화.
      useSelector 랜더링 문제.  
       Redux Reseletor 랜더링 최적화.
      memoization 최적화.  
       병목 함수 로직 개선.

- [ ] 참고 (이전시간-Part1)  
       텍스트 압축  
       이미지 사이즈 압축  
       이미지 CDN 최적화  
       이미지 preload  
       이미지 적절한 사이즈 변환  
       리소스 캐싱  
       컴포넌트 preload.  
       Component Lazy load  
       React code Splitting.  
       Image Lazy Load.  
       병목 코드 제거  
       repaint, reflow 줄이기

### 3-1) 실습 내용 소개

[ 로딩 성능 최적화 ]

- [ ] 이미지 레이지 로딩
- [ ] 이미지 사이즈 최적화.
- [ ] 동영상 최적화.
- [ ] 폰트 최적화.
- [ ] 캐시 최적화.
- [ ] 불필요한 CSS 최적화.

[ 도구 ]

- [ ] Network, Performance, Lighthouse, Coverage 탭.  
       Coverage 탭은 전체 JS코드의 Usage 비율을 보여준다.  
       즉, 쓸모없는 JS 코드가 얼마나 번들링 되어 있는지 알 수 있다.

- - Coverage Tab이 보이지 않는다면, ctrl+shift+P 로 명령줄에서 coverage를 검색하자.

## 3-3) 이미지 지연(lazy) 로딩 (intersection observer).

문제점 : 첫 랜딩 페이지에 이미지,동영상이 있다.  
동영상이 먼저 보여지고, 나중에 이미지가 보여지는 구조이다.  
하지만 Network Tab을 보니 이미지 먼저 다운로드가 된다.

해결방법 :  
(1) 이미지를 빠르게 다운로드 받게 한다.  
(2) 이미지를 lazyloading 시킨다.

IntersectionObserver 이용한 이미지 loading

```js
import React, { useEffect, useRef } from "react";

function Card(props) {
  // DOMElement 참조
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {};
    const callback = (entries, observer) => {
      // callback 함수 (최초등록시,viewport-in,viewport-out)
      entries.forEach((entry) => {
        // vierport-in 이라면
        if (entry.isIntersecting) {
          // src 로 속성을 옮겨 이미지 다운로드
          console.log("is intersecting", entry.target.dataset.src);
          entry.target.src = entry.target.dataset.src;
          // 관찰 해제
          observer.unobserve(entry.target);
        }
      });
    };
    // observer 객체 생성
    const observer = new IntersectionObserver(callback, options);
    // observer target 등록
    observer.observe(imgRef.current);
  }, []);

  return (
    <div className="Card text-center">
      <img data-src={props.image} ref={imgRef} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
```

## 3-4) 이미지 사이즈 최적화

### 이미지 사이즈 최적화 방법

1. 이미지 크기 줄이기
2. 이미지 압축 하기

### 이미지 사이즈 포멧

PNG : 무손실, 투명 이미지  
JPG : PNG보단 더 압축, 화질 높음  
WEBP : 구글의 차세대 이미지 포멧

- WEBP는 지원하지 않은 브라우저가 몇몇 있지만, 용량과 화질에서 개선이 되었다.
- 구글에서 릴리즈한 WEBP 서비스

> squoosh.app

1. 퀄리티 75~80 보존 (이것만으로 80% 이상의 용량 압축)
2. 사이즈 조정

? 이런 웹팩 플러그인으로도 가능하지 않을까??  
https://www.npmjs.com/package/imagemin-webp-webpack-plugin

### 이슈 핸들링 - 분기( Webp 지원 안하는 브라우저면 jpg 로딩 )

해결 : picture 태그

- 화면 사이즈에 따라서 다른 이미지를 불러온다.
- 혹은 user agent의 지원 type별로 source를 다르게 불러온다.  
  http://www.tcpschool.com/html-tags/picture  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture

### The type attribute

```
The type attribute specifies a MIME type for the resource URL(s) in the <source> element's srcset attribute. If the user agent does not support the given type, the <source> element is skipped.
```

```html
<picture>
  <source srcset="logo.webp" type="image/webp" />
  <img src="logo.png" alt="logo" />
</picture>
```

요약 :  
picture , source, img 을 이용해서 다음 항목 설정 가능

- 화면 크기에 따른 분기
- user Agent 에 따른 이미지 지원 분기
- 이미지 로딩 실패에 따른 대처 이미지

## 4-1) 실습 내용 소개

목표
[ 로딩 성능 최적화 ]

- [ ] 이미지 lazyloading

[ 렌더링 성능 최적화 ]

- [ ] Layout Shift ( CLS , culmulative layout shift )
- 이미지가 뚝뚝 끊기며 밀리면서 나오는 현상의 총합(LCS)
- [ ] useSelector
- [ ] Redux Reselect
- [ ] 병목 함수 - Memo
- [ ] 병목 함수 - 로직 개선

[ 분석 툴 ]
Chrome - Network, Performance, Lighthosue
React Developer Tools (Profiler,Components)
Redux DevTools.

## 4-3) Layout Shift 피하기

Performance 탭에서 layout shift 을 볼 수 있다.

- 0~1 사이의 수치로 Culmulative Layout shfit 가 나온다.

Layout Shift : 이미지가 늦게 로딩되는 이유로, 다른 레이아웃이 밀리는 현상

- 이는 성능상의 이슈가 발생이 되고,
- 사용성에 큰 영향을 준다.(화면 클릭하려 했건만 요소가 밀림)
- 스켈레톤 로딩을 사용하는 이유이기도 함

### Layout Shift 원인

1. 사이즈가 정해져 있지 않은 이미지
2. 사이즈가 정해져 있지 않은 광고
3. 동적으로 삽입된 콘텐츠
4. Web font( FOIT, FOUT ).

### 해결 방법

1. 사이즈를 정해준다.
2. 사이즈 예측이 어렵다면, 어느정도 사이즈를 잡아주자.

### 코드 로직

이미지를 서버에서 가져와야 크기를 알기때문에, 이미 Wrapper Box을 만들어야 한다.

- 16:9 의 Ratio Box Wrapper 을 만들고
- 그 안에 이미지를 꽉 채우자.
- 단 이때, inner Image는 position:absolute 로 설정하여, content가 더 커지는것을 방지 하자.

```js

function PhotoItem({ photo: { urls, alt } }) {
  ...
  return (
    <ImageWrap>
      <LazyLoad offset={1000}>
        <Image src={urls.small} alt={alt} onClick={openModal} />
      </LazyLoad>
    </ImageWrap>
  );
}
// 부모의 width와 padding으로 16:9 사이즈를 미리 확보해 둔다.
// Ratio Wrapper Box
const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;
// Ratio Box 안에 position:absolute 로 꽉 채워 준다.
const Image = styled.img`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
```

### 4-4) 이미지 지연(lazy) 로딩 (react-lazyload)

react-lazyload 라는 라이브러리도 있다.

- 스크롤 기반의 Lazyload를 해준다고 한다.
- https://www.npmjs.com/package/react-lazyload

```js
import LazyLoad from "react-lazyload";
import { showModal } from "../redux/imageModal";

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <LazyLoad offset={1000}>
        <Image src={urls.small} alt={alt} onClick={openModal} />
      </LazyLoad>
    </ImageWrap>
  );
}
```

### More font 최적화

https://d2.naver.com/helloworld/4969726

## 4-5) useSelect 렌더링 문제 해결

useSelector을 이용해서 store을 구독하고 있는데, 왜 모달에 관한 state 변경이 photoList의 state 변경까지 영향을 미칠까?  
-> 정확한 useSelector의 원리를 알아야 한다.

useSelector 는 값의 비교를 통해 **달라진 경우만** 리랜더링 한다.  
여기서 값의 비교는 useSelector의 함수의 리턴값을 통해 이루어 진다.  
아래 코드에서는 항상 새로운 객체가 리턴되므로, 반드시 리랜더링 된다.

```js
const { modalVisible, bgColor, src, alt } = useSelector((state) => ({
  modalVisible: state.imageModal.modalVisible,
  bgColor: state.imageModal.bgColor,
  src: state.imageModal.src,
  alt: state.imageModal.alt,
}));
```

### useSelector 문제 해결 방법

1. Object를 새로 만들지 않도록, State 쪼개기
2. 새로운 Equality Function 사용하기

3. Object를 새로 만들지 않도록, State 쪼개기 코드

- 값 선택을 프리미티프 타입까지 쪼갠다면, 같은 값에 대해 리랜더링이 일어나지 않음

```js
// before
const { modalVisible, bgColor, src, alt } = useSelector((state) => ({
  modalVisible: state.imageModal.modalVisible,
  bgColor: state.imageModal.bgColor,
  src: state.imageModal.src,
  alt: state.imageModal.alt,
}));

// after
// 프리미티브 값으로 비교되게끔 변경되었음
const modalVisible = useSelector((state) => state.imageModal.modalVisible);
const bgColor = useSelector((state) => (bgColor: state.imageModal.bgColor));
const src = useSelector((state) => state.imageModal.src);
const alt = useSelector((state) => state.imageModal.alt);
```

2. 새로운 Equality Function 사용하기 코드

- 얕은 비교하는 함수대신, 직접 어떤 값을 비교하면 되는지 알도록 함수를 제공
- 리덕스에서 제공해주는 shallowEqual 을 이용해서 1-depth 까지는 쉽게 비교하도록 한다.

```js
import { useSelector, shallowEqual } from "react-redux";

function ImageModalContainer() {
  const { modalVisible, bgColor, src, alt } = useSelector(
    (state) => ({
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
    }),
    shallowEqual // add 객체의 첫번째 뎁스까지 같은지 비교 하도록 하여 리랜더링 방지
  );

  return (
    <ImageModal
      modalVisible={modalVisible}
      bgColor={bgColor}
      src={src}
      alt={alt}
    />
  );
}

export default ImageModalContainer;
```

- 아래와 같은 코드는, filter가 있으므로 매번 1-depth값을 비교해도, 항상 새로운 객체가 나오므로 리랜더링의 대상이 된다.
- 해결 : 우선 state를 가져오고, filter 로직은 밖으로 빼도록 하자.

```js
// before
const { photos, loading } = useSelector(
  (state) => (
    {
      photos:
        state.category.category === "all"
          ? state.photos.data
          : state.photos.data.filter(
              // 매번 달라지는 객체의 값 - shallowEqual 무용지물
              (photo) => photo.category === state.category.category
            ),
      loading: state.photos.loading,
    },
    shallowEqual
  )
);

// after
// 값 추출 이후, 파생  데이터를 처리하자.
const { category, allPhotos, loading } = useSelector(
  (state) => ({
    category: state.category.category, // 우선 값을 추출하고
    allPhotos: state.photos.data,
    loading: state.photos.loading,
  }),
  shallowEqual
);

const photos =
  category === "all"
    ? allPhotos
    : allPhotos.filter((photo) => photo.category === category);
```

---

### cf)

~ 틸드( Tilt ) 연산자

- NOT 연산을 하며, ~~은 이중 NOT 연산을 통해 Math.floor() 와 같은 연산 (양수만)

```js
~5.5; // => -6
~-6; // => 5
~~5.5; // => 5  (same as Math.trunc(5.5) and Math.floor(5.5))
~~-5.5; // => -5 (same as Math.trunc(-5.5) but NOT the same as Math.floor(-5.5), which would give -6 )
```

---

### cf) Ec2 Free티어 메모리 부족 해결

메모리 Swap 늘리기
https://sundries-in-myidea.tistory.com/102

띄울려는 Docker kafka 옵션 설정
https://github.com/confluentinc/cp-docker-images/issues/741

---

### ref

인프런  
프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 1  
프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 2
