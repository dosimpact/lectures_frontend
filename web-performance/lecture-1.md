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