
- [Typescript + 자동 재실행 개발환경](#typescript--자동-재실행-개발환경)
  - [prepare](#prepare)
  - [install](#install)
  - [nodemon.json](#nodemonjson)
  - [add scripts](#add-scripts)

# Typescript + 자동 재실행 개발환경

## prepare
- node.js


## install

- create tsconfig.json

```
npm init -y
npm install typescript 
npm install nodemon ts-node -D
npx tsc --init
```

## nodemon.json

add root nodemon.json

execMap
- ts파일을 실행시키면 node 대신 ts-node로 구동
- nodemon src/index.ts === nodemon `ts-node src/index.ts`
- npx nodemon --exec "ts-node src/index.ts"

ext
- 해당 확자를 가진 파일들이 변경되면 재실행 한다. 
```json
{
  "execMap": {
    "ts": "ts-node"
  },
  // "exec":"ts-node src/index.ts",
  "delay": 500,
  "ignore": [".git", "node_modules/**/node_modules"],
  "watch": ["src"],
  "ext": "js,json,ts"
}
```
## add scripts

```
   "dev": "nodemon src/index.ts"
```