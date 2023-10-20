## ref 

- 해당 강의
https://www.youtube.com/watch?v=PCWaFLy3VUo   
-  쉐도우 돔(Shadow Dom)이란  
https://skout90.github.io/2017/10/29/Web/%EC%9B%B9%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80%EC%89%90%EB%8F%84%EC%9A%B0%EB%8F%94/
- 웹 컴포넌트  
https://ko.reactjs.org/docs/web-components.html 
- 리액트(react) 잘 쓰고 있는데, 왜 웹 컴포넌트(Web Component)가 필요할까?  
https://blueshw.github.io/2018/11/26/web-component/

## 웹컴포넌트란  

웹플렛폼의 API들의 셋이다.  
- 커스터 마이징, 재사용, 캡슐화된 HTML태그 만들어낸다.   
- Custom Elements, Shadow DOM, HTML Templates  

## 제작 과정  
- 커스텀 태그 만들기  
- 커스텀 태그 클래스 만들기  
- 라이플 사이클 매서드 사용 가능


## 라이플 싸이클 함수들   
- constructor() : 인스턴스화 될때     
- connectedCallback() : DOM연결시   
- disconnectedCallback():    
- attributeChangedCallback(attrName,oldVal,newVal)  


## 쉐도우돔
- 섀도우 DOM은 DOM의 구조를 가지고 있으나, 외부에 노출되지 않은 DOM을 말하며 DOM의 구조를 캡슐화할 때 사용한다. ( 스타일과 마크업이 캡슐화 되어 있다.)  
- eg) 동적으로 받은 HTML을 랜더시 특정 CSS때문에 모든 DOM이 고통받는경우. 이를 해결할 수 있다.
- -> 캡슐화 덕분에 쉐도우돔에만 스타일링이 적용된다.  

- 구성은 템플릿(Templates), 데코레이터(Decorators), 커스텀 엘리먼트(Custom Element), 섀도 DOM(Shadow DOM)으로 되어 있다.  
- Create : element.attachShadow({mode:open})   
- Create : shadowRoot - for interact, Reference   


## HTML 템플릿  
- 캡슐화된 HTML탬플릿 작성
- HTML+CSS+변수로 생성함  

## React와 웹컴포넌트
React : 데이터와 DOM을 동기화하는 선언적 라이브러리 제공  
eg) state변화에 DOM이 빠르게 랜더링  
웹컴포넌트 : 재사용가능한 컴포넌트에 강한 캡슐화 제공  
eg) 새로운 DOM을 그렸는데 동일이름의 CSS임에도 다른DOM에 영향을 미치지 않는다.  

### 웹 컴포넌트에서 React 사용하기

```js
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);
```