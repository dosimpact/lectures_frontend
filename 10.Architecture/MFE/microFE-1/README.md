- [micro-frontends](#micro-frontends)
  - [ref](#ref)
  - [이점](#이점)
  - [예) 음식배달 웹](#예-음식배달-웹)
  - [통합 접근 방식](#통합-접근-방식)
    - [서버 측 템플릿 구성 (SSR 런타임)](#서버-측-템플릿-구성-ssr-런타임)
    - [빌드 타임 통합](#빌드-타임-통합)
    - [iframe을 통한 런타임 통합](#iframe을-통한-런타임-통합)
    - [JavaScript를 통한 런타임 통합](#javascript를-통한-런타임-통합)
    - [웹 구성 요소를 통한 런타임 통합](#웹-구성-요소를-통한-런타임-통합)
- [고려해야할 점](#고려해야할-점)
  - [스타일링](#스타일링)
  - [Shared component libraries](#shared-component-libraries)
  - [애플리케이션 간 커뮤니케이션](#애플리케이션-간-커뮤니케이션)
  - [백엔드 통신](#백엔드-통신)
  - [테스트](#테스트)
- [Pattern: Backends For Frontends](#pattern-backends-for-frontends)
  - [ref](#ref-1)


# micro-frontends

## ref

https://martinfowler.com/articles/micro-frontends.html.

## 이점

1. 점진적 업그레이드

- 레거시의 전체 재작성을 피하고, 하나씩 바꾸어 나갈 수 있다.

2. 단순,간단하게 분리된 레포

- Bounded Context는 Domain-Driven Design의 중심 패턴
- DDD 가 용이

3. 독립 베포

- 각자 다른 프로덕션으로 베포하므로, 위험이 줄어든다.
- 하지만, 베포 파이프라인을 구성해야 하는 준비가 필요.

4. 자율 팀

- 비즈니스 단위별로 팀이 구성된다.

## 예) 음식배달 웹

1. 레스토랑을 탐색하고 검색할 수 있는 페이지

   - 랜딩 페이지, 검색 , 필터링 , 이전에 주문한 메뉴

2. 상세 메뉴 항목을 보여주는 페이지

   - 할인 관리, 특별 요청, 옵션

3. 나의 메뉴 ( 프로필 페이지 )

   - 고객의 주문 내역, 배송 추적, 지불 옵션 등

- 각 페이지는 전문팀이 나누어질 만큼 비즈니스 정당성이 있다.


## 통합 접근 방식

- 1. 빌드 타임 통합  
- 2. 런타임 통합  

### 서버 측 템플릿 구성 (SSR 런타임)

html template 을 이용해서 microApp의 HTML 파일을 합쳐서 서버측 랜더링을 한다.  

```html
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Feed me</title>
  </head>
  <body>
    <h1>🍽 Feed me</h1>
    <!--# include file="$PAGE.html" -->
  </body>
</html>
```
- standard server-side composition.  
- nginx 구성을 통해, microApp의 HTML URI를 설정  


### 빌드 타임 통합  

```json
{
  "name": "@feed-me/container",
  "version": "1.0.0",
  "description": "A food delivery web app",
  "dependencies": {
    "@feed-me/browse-restaurants": "^1.2.3",
    "@feed-me/order-food": "^4.5.6",
    "@feed-me/user-profile": "^7.8.9"
  }
}
```

단점 : microApp이 변경될떄마다 , rebuild  
   --> 런타임 통합을 찾고 싶다.  



### iframe을 통한 런타임 통합

```html
<html>
  <head>
    <title>Feed me!</title>
  </head>
  <body>
    <h1>Welcome to Feed me!</h1>

    <iframe id="micro-frontend-container"></iframe>

    <script type="text/javascript">
      const microFrontendsByRoute = {
        '/': 'https://browse.example.com/index.html',
        '/order-food': 'https://order.example.com/index.html',
        '/user-profile': 'https://profile.example.com/index.html',
      };

      const iframe = document.getElementById('micro-frontend-container');
      iframe.src = microFrontendsByRoute[window.location.pathname];
    </script>
  </body>
</html>
```

iframe 방식은 완전히 격리된 공간을 사용한다.  
- 딥링킹,history,라우팅 문제 등 결합이 좀 더 느슨해야할 필요가 있다.  
- 반응형을 만들때도 문제. 

### JavaScript를 통한 런타임 통합  

bundle.js 를 로드하고, 랜더링이 필요한 시점에 호출 한다.  
- 가장 많이 흔하게 쓰는 방식  

```Js
<html>
  <head>
    <title>Feed me!</title>
  </head>
  <body>
    <h1>Welcome to Feed me!</h1>

    <!-- These scripts don't render anything immediately -->
    <!-- Instead they attach entry-point functions to `window` -->
    <script src="https://browse.example.com/bundle.js"></script>
    <script src="https://order.example.com/bundle.js"></script>
    <script src="https://profile.example.com/bundle.js"></script>

    <div id="micro-frontend-root"></div>

    <script type="text/javascript">
      // These global functions are attached to window by the above scripts
      const microFrontendsByRoute = {
        '/': window.renderBrowseRestaurants,
        '/order-food': window.renderOrderFood,
        '/user-profile': window.renderUserProfile,
      };
      const renderFunction = microFrontendsByRoute[window.location.pathname];

      // Having determined the entry-point function, we now call it,
      // giving it the ID of the element where it should render itself
      renderFunction('micro-frontend-root');
    </script>
  </body>
</html>
```
### 웹 구성 요소를 통한 런타임 통합  

Webcomponent Spec을 이용해서 , ShadowDOM을 활용하는 방법인듯.  
- 위 방식과 거의 유사하지만 ShadowDOM의 유무  
- XML 같은 태그들을 즐비하게 될 수도 , youtube 페이지 처럼?  

```html
<html>
  <head>
    <title>Feed me!</title>
  </head>
  <body>
    <h1>Welcome to Feed me!</h1>

    <!-- These scripts don't render anything immediately -->
    <!-- Instead they each define a custom element type -->
    <script src="https://browse.example.com/bundle.js"></script>
    <script src="https://order.example.com/bundle.js"></script>
    <script src="https://profile.example.com/bundle.js"></script>

    <div id="micro-frontend-root"></div>

    <script type="text/javascript">
      // These element types are defined by the above scripts
      const webComponentsByRoute = {
        '/': 'micro-frontend-browse-restaurants',
        '/order-food': 'micro-frontend-order-food',
        '/user-profile': 'micro-frontend-user-profile',
      };
      const webComponentType = webComponentsByRoute[window.location.pathname];

      // Having determined the right web component custom element type,
      // we now create an instance of it and attach it to the document
      const root = document.getElementById('micro-frontend-root');
      const webComponent = document.createElement(webComponentType);
      root.appendChild(webComponent);
    </script>
  </body>
</html>
```

# 고려해야할 점  

## 스타일링  


CSS는 전역에서, 케스케이딩 방식으로 스타일을 입혀준다.    
따라서, 스타일에 대한 격리가 필요하다.  

- BEM 개발 규칙을 정하자   
- SASS 전처리기로 네임스페이스를 넣자.  
- CSS-in-JS 라이브러리를 사용   
- shadow DOM 스타일 격리를 사용  


## Shared component libraries

ui 컴포넌트는 통일해서, 플랫폼이 일관성 있는 컴포넌트를 사용하게 하자.   
- 하지만, 비즈니스 로직이 포함되지 않도록 View만 포함하자.  
- ? 딱 한번만 공용 라이브러리를 로드할 수 있는가 ?  


## 애플리케이션 간 커뮤니케이션

불가피하게 MicroApp간에 통신이 필요하다면  
- Custom Event ( https://www.npmjs.com/package/pubsub-js 등 )  
- URL을 통한 통신 매커니즘  
- Redux을 통한, 단일전역 공유 저장소  

## 백엔드 통신

Backend for frontend 패턴 : https://samnewman.io/patterns/architectural/bff/ 
- 프론트앤드의 요구사항을 충족하기 위한 백엔드  
- 웹, 모바일 웹 , 앱 의 각자의 요구사항을 총족하려함  
- BFF를 동일한 팀이 소유하면, 다른팀의 backend변경을 기다리지 않아도 된다.  

인증관련 문제  
- 컨테이너 어플리케이션에서 인증 후 토큰을 얻는다.  
- 그리고 각 마이크로앱에 토큰을 주입할 수 있다.  

## 테스트

...continue




# Pattern: Backends For Frontends


## ref 

Pattern: Backends For Frontends : https://samnewman.io/patterns/architectural/bff/


