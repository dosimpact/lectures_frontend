- [Vite vs CRA - 번역](#vite-vs-cra---번역)
  - [Vite 작동 방식](#vite-작동-방식)
  - [Vite 프로세스](#vite-프로세스)
  - [시작](#시작)
  - [환경변수](#환경변수)
  - [config](#config)


# Vite vs CRA - 번역


브라우저용으로 모든 JavaScript 파일과 모듈을 묶을 수 있는 도구가 필요합니다. 
- 과거에는 Webpack과 같은 모듈 번들러를 사용했지만 Webpack은 약간 거대합니다. 
- 이는 매우 강력한 도구이지만 매우 복잡하기도 합니다. 
- Vue.js 프레임워크를 만든 Evan You가 만든 최신 빌드 도구인 Vite를 살펴보겠습니다.

Vite는 바닐라 JavaScript 프로젝트에 사용 가능
- React, Vue 및 Svelte와 같은 프레임워크에서도 작동하도록 설계되었습니다. 
- React를 사용할 것이지만 개념은 모든 프레임워크에서 동일합니다.


## Vite 작동 방식

앞서 Vite의 작동 방식을 살펴보고 Webpack과 같은 번들러의 작동 방식에 대해 이야기해 보겠습니다.

Webpack은 CSS, Sass 및 기타 자산, 모든 JavaScript 파일 및 모듈을 가져와 단일 또는 때로는 몇 개의 파일로 묶을 수 있음 
- 우리는 webpack.config.js파일을 사용하여 Webpack에 파일을 묶는 방법을 구성. 
- Webpack이 작업을 수행하는 데 도움이 되는 플러그인과 로더를 설치.

Webpack 및 기타 기존 모듈 번들러에서 발생할 수 있는 문제
- 변경이 있을 때마다 파일을 번들로 묶어야 하기 때문에 속도가 느리다. 
- 애플리케이션이 클수록 파일을 묶는 데 시간이 더 오래 걸립니다.
- 플러그인과 로더를 설치하고 구성하는 것도 약간 어려울 수 있습니다.

Vite는 동일한 작업을 많이 수행하지만 이러한 문제를 해결합니다. 

1. 개발 중에는 Webpack이나 Parcel처럼 모든 저장을 기반으로 빌드되지는 않습니다. 
- 대신 파일을 브라우저에 직접 제공합니다. 
- Vite 는 JavaScript 기반 번들러보다 10~100배 빠르게 종속성을 번들링하는 Go로 작성된 JavaScript 번들러인 **esbuild** 를 기반으로 구축
- esbuild는 또한 브라우저의 기본 ES 모듈을 활용합니다. 
- 이는 Vite가 파일을 묶지 않고도 브라우저에 직접 제공할 수 있음을 의미합니다.

2. Vite는 또한 필요한 코드만 로드하기 위해 즉시 코드 분할을 활용합니다.
- 이는 우리가 매우 빠른 개발 경험을 가질 수 있다는 것을 의미합니다.
- 프로덕션용 파일을 빌드할 때가 되면 Vite는 Rollup 이라는 실제 모듈 번들러를 사용
- 파일을 가능한 한 작게 만들기 위해 축소 및 트리 쉐이킹과 같은 최적화를 수행합니다.


## Vite 프로세스

서버를 시작하기 전에 모든 것을 묶을 필요는 없습니다. 
- Vite는 esbuild를 사용하여 파일을 사전 번들로 묶고 즉시 코드 분할을 수행
- 서버를 시작하고 브라우저에서 변경 사항을 즉시 확인할 수 있으며 
- 파일이 번들링될 때까지 기다릴 필요가 없습니다. 
- 이는 CRA에 비해 엄청난 개선입니다.

앱이 브라우저에 제공되면 Vite는 변경 사항을 감시하고 실시간으로 브라우저를 업데이트합니다. 
- 브라우저를 사용하여 ES 모듈을 구문 분석한 다음 즉시 파일을 번들로 묶습니다.
- 즉, 브라우저에서 변경 사항을 즉시 확인할 수 있습니다.

코드에 import 및 export 문이 포함되어 있으면 브라우저는 HTTP를 통해 서버에서 해당 파일을 요청합니다. 
- 그런 다음 개발 서버는 이러한 요청을 가로채고 필요한 경우 코드 변환을 수행합니다.
- 요청된 모듈에 변경 사항이 없으면 서버는 304 수정되지 않은 상태 코드를 반환하고 브라우저는 이를 무시합니다.

## 시작

npm create vite@latest my-vite-app
yarn create vite@latest my-vite-app

## 환경변수

```
.env
VITE_SOME_KEY=123

.app.jsx
<div>{(import.meta.env.VITE_SOME_KEY)}</div>

```

## config

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
```