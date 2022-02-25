## 40.3 이벤트 핸들러 등록

이벤트 핸들러를 등록하는 방법은 3가지가 있다.

1. 이벤트 핸들러 어트리뷰트 방식  
- on접두사와 이벤트의 타입이름의 HTML요소의 속성값에 핸들러 함수를 등록한다.
- onclick 어트리뷰트에 등록될 함수몸체를 문자열로 넣으면 파싱되어 등록   
- 바닐라JS에선 권장하진 않지만, JSX를 사용할때는 주로사용한다.

```html
    <button onclick="sayHi('Lee'); console.log('clicked');">ClickMe</button>
    <script>
        function sayHi(name){
            console.log("HI ",name);
        }
    </script>
```

2. 이벤트 핸들러 프로퍼티 방식

- 문법 :  이벤트타겟.이벤트타입 = 이벤트핸들러 
- 1번 방법도 결국 2번 방법으로 변환.
- 단점은, 하나의 이벤트만 바인딩이 된다.

```html
    <button id="button2">ClickMe2</button>
    <script>
        const $button2 = document.querySelector("#button2")
        // ✅ 프로퍼티 방식 등록
        $button2.onclick = function(){
            console.log("clicked button2");
        }
        // ✅ 프로퍼티 방식 제거 -  null을 할당
        $button2.onclick = null
    </script>
```

3. addEventListener 메서드 방식

- EventTarget.prototype.addEventListener 사용
- 문법 : 이벤트타겟.addEventListener(이벤트타입, 이벤트핸들러) 
- 1번,2번 방법과 같이 사용 가능하며, 핸들러를 원하는 만큼 등록 가능 

```html

    <button id="button3">ClickMe3</button>
    <script>
        const $button3 = document.querySelector("#button3")
        $button3.addEventListener("click",function(){
            console.log("clicked button3");
        }) 
        $button3.addEventListener("click",function(){
            console.log("button3 ~ ✔");
        }) 
    </script>
```
## 40.4 이벤트 핸들러 제거

```html
    <button id="button3">ClickMe3</button>
    <script>
        const $button3 = document.querySelector("#button3")
        const handleClick = function(){
            console.log("clicked button3");
        }
        $button3.addEventListener("click",handleClick) 
        // ✅ 익명함수를 등록하면 제거할 방법이 없다.
        $button3.addEventListener("click",function(){
            console.log("button3 ~ ✔");
        }) 
        // ✅ 이벤트 제거
        // 이벤트 캡처링 리스너로 등록되어 있다면 , option=true 인자까지 전달해야, 제거가된다. 
        // -- 이벤트 제거 실패
        $button3.removeEventListener("click",handleClick,true)
        // -- 이벤트 제거 성공
        $button3.removeEventListener("click",handleClick)

        // ❌ 익명함수 이벤트를 삭제하는 방법 - 생성과 동시에 삭제해야함(1회성)
        // -- strict mode에서 arguments.callee 사용이 금지 되므로 하지 말자
        $button3.addEventListener("click",function(){
            console.log("✨ 단한번만 발생하는 이벤트 ~ ✔");
            $button3.removeEventListener("click",arguments.callee)
        }) 
    </script>
```

