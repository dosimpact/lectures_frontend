
# nodemon 

- 특정 파일의 감지를 변화해서, 다시 시작하도록 만들어주는 프로세스
- 아래 예시는 typescript 코드가 변경될때 다시 시작하는 코드이다.

## nodemon.json 

```js
{
  "restartable": "rs", // 다시 시작 가능함.
  "ignore": [".git", "node_modules/**/node_modules"], // watch 무시할 대상 
  "verbose": false, // nodemon의 로깅 여부
  "execMap": {
    "ts": "ts-node" // ts확장자가 오면, ts-node로 실행한다.
  },
  "watch": ["src"], // watch할 디렉터리 단위
  "ext": "js,json,ts" // default js, 이고 ts 확장자도 watch목록에 포함
}
```

## 실행 방법

- typesciprt 연습예제에는 eg1.ts, eg2.ts 등 여러 파일이 존재
- nodemon eg1.ts = ts-node eg1.ts 으로 실행 가능
- 
```
npx nodemon src/eg1.ts
```

## 스크립트 작성

- 메인 실행 포인트는 다음처럼 스크립트를 지정했다.
- nodemon src/index.ts = ts-node src/index.ts 로 치환
```
  "scripts": {
    "dev": "nodemon src/index.ts" 
  },
```
