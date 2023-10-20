- [1. start project - Sentry install](#1-start-project---sentry-install)
  - [회원가입 및 조직/project 생성](#회원가입-및-조직project-생성)
  - [Sentry.init](#sentryinit)
  - [eg 1. ErrorLoggedBtn](#eg-1-errorloggedbtn)
  - [eg 2. performance](#eg-2-performance)
- [2. Sentry로 우아하게 프론트엔드 에러 추적하기](#2-sentry로-우아하게-프론트엔드-에러-추적하기)
  - [애러 종류](#애러-종류)
  - [Sentry 소개](#sentry-소개)
  - [install](#install)
  - [eg 3. SentryErrorBoundary](#eg-3-sentryerrorboundary)
  - [eg 4. captureMessage, captureException](#eg-4-capturemessage-captureexception)
  - [eg 5. Scope](#eg-5-scope)
- [refs](#refs)



# 1. start project - Sentry install 

##  회원가입 및 조직/project 생성

```
# Using yarn
yarn add @sentry/react @sentry/tracing

# Using npm
npm install --save @sentry/react @sentry/tracing
```

##  Sentry.init


```js
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: "https://d404381e2726499fa763b5071c59e2d7@o1393830.ingest.sentry.io/6715538",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

- https://docs.sentry.io/platforms/javascript/guides/react/performance/


## eg 1. ErrorLoggedBtn

- 1. ErrorLoggedBtn : error log

## eg 2. performance


- 2. performance : performance monit (by traffic threshold )

# 2. Sentry로 우아하게 프론트엔드 에러 추적하기


https://tech.kakaopay.com/post/frontend-sentry-monitoring/#%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0


## 애러 종류 

1. 내부 요인 

- 데이터 영역
- 화면 영역

2. 외부 요인

- 네트워크 이슈 
- 단말기, OS
- 브라우저 정책, 모바일 쿠롬의 쿠키정책, 사파리의 API 버그  

## Sentry 소개

실시간 로그 취합 + 모니터링 플랫폼
- 성능 모니터링
- 알림 기능
- 로그 시각화 제공  

▪ 이벤트 로그에 대한 다양한 정보 제공  

```
Exception & Message: 이벤트 로그 메시지 및 코드 라인 정보 (source map 설정을 해야 정확한 코드라인을 파악할 수 있습니다.)
Device: 이벤트 발생 장비 정보 (name, family, model, memory 등)
Browser: 이벤트 발생 브라우저 정보 (name, version 등)
OS: 이벤트 발생 OS 정보 (name, version, build, kernelVersion 등)
Breadcrumbs: 이벤트 발생 과정
```
▪ 비슷한 오류 통합  
▪ 다양한 플랫폼 지원  
▪ 다양한 알림 채널 지원  


## install

```js
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://d404381e2726499fa763b5071c59e2d7@o1393830.ingest.sentry.io/6715538",
  release: "0.0.1",
  environment: process.env.NODE_ENV === "production" ? "production" : "dev",
  normalizeDepth: 6,
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,
  integrations: [
    new Sentry.Integrations.Breadcrumbs({ console: true }),
    new BrowserTracing(),
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

```

```
dsn: 이벤트를 전송하기 위한 식별 키  
release: 애플리케이션 버전 (보통 package.json에 명시한 버전을 사용합니다. 이는 버전별 오류 추적을 용이하게 합니다.)  
environment: 애플리케이션 환경 (dev, production 등)  
normalizeDepth: 컨텍스트 데이터를 주어진 깊이로 정규화 (기본값: 3)  
tracesSampleRate : 오류 및 성능 데이터의 캡처 비율 (프로덕션 0.2, 개발 1.0)
integrations: 플랫폼 SDK별 통합 구성 설정 (React의 경우 react-router integration 설정 가능)  
```

## eg 3. SentryErrorBoundary

## eg 4. captureMessage, captureException

- captureException: error 객체나 문자열 전송 가능
- captureMessage: 문자열 전송 가능

## eg 5. Scope


# refs

https://docs.sentry.io/platforms/javascript/guides/react/
https://www.youtube.com/watch?v=yjTI32nW7ck 
https://tech.kakaopay.com/post/frontend-sentry-monitoring/#%ED%92%8D%EB%B6%80%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8C%93%EA%B8%B0
