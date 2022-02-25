## ref)

[https://velog.io/@widian/%EC%9B%B9%EC%97%90%EC%84%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0](https://velog.io/@widian/%EC%9B%B9%EC%97%90%EC%84%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

[https://github.com/hanameee/vanillaJSKitty/blob/master/studyLog.md#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%AA%A8%EB%93%88-%EC%8B%9C%EC%8A%A4%ED%85%9C]
(https://github.com/hanameee/vanillaJSKitty/blob/master/studyLog.md#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%AA%A8%EB%93%88-%EC%8B%9C%EC%8A%A4%ED%85%9C)

## JS 모듈

- 모듈시스템은 CommonJS,AMD 외 사용해왔음
- 코드 뭉치를 export 하고 import 하는 과정은 동일
- 모듈시스템을 표준화 한다.

- 모듈시스템을 사용하는 순간 "strict mode"
- HTML 코멘트 사용 불가 .. ?
- 모듈은 top level scope를 가지고, 모듈내에서 전역변수 선언(var foo;), window.foo 로 접근 불가능
- 같은 JS라도 module인지, 클래식 스크립트인지에 따라 다르다.

## 스크립트 모듈로 임포트

- 아래처럼 type="module"을 사용해서 임포트 한다.

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="src/style.css" />
        <title>샘플 프로젝트</title>
    </head>
    <body>
        <main id="App"></main>
        <script type="module" src="src/main.js"></script>
    </body>
</html>
```
