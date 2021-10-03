
## 커스텀 이벤트 - 01
	

커스텀 이벤트 생성 과정   

```js
	- 1.생성  |  new CustomEvent(이벤트이름, {detail:{message:"hello"}})  
	- 2.등록  |  EventTarget.addEventListener(이벤트이름, 리스너함수)  
	- eg) $input.addEventListener("이벤트이름",(e)=>console.log(e.detail.message)) 
	- 3.발생  |  EventTarget.dispatchEvent(CustomEvent인스턴스) -> 리너스 함수 실행  

	- 버블링을 추가하고 싶다면 option에 넣으면 된다..  
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <div id="container">
        <input type="text" id="inputText" readonly />
        <button type="button" id="btnMessage">Toggle Message</button>
      </div>
    <script>

      const $container = document.querySelector("#container");
      const $input = document.querySelector("#inputText");
      const $btn = document.querySelector("#btnMessage");

      const event = new CustomEvent("setDefaultMessage", {
        detail: {
          message: "sample message",
        },
        bubbles:true
      });

      $container.addEventListener("setDefaultMessage", function (e) {
          console.log("bubbles:true",e.detail.message);
      });

      $input.addEventListener("setDefaultMessage", function (e) {
          console.log(e);
        $input.value = $input.value ? "" : e.detail.message;
      });

      $btn.addEventListener("click", function (e) {
        $input.dispatchEvent(event);
      });
    </script>
  </body>
</html>
```