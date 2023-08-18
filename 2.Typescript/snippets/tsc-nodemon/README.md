
- [Typescript + 자동 재실행 개발환경](#typescript--자동-재실행-개발환경)
  - [prepare](#prepare)
  - [install](#install)
  - [nodemon.json](#nodemonjson)
  - [add scripts](#add-scripts)

# Typescript + 자동 재실행 개발환경

## prepare
- node.js >= 16  


## install

```
npm init -y
npm install typescript 
npm install nodemon ts-node -D
```

## nodemon.json

add root nodemon.json

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": false,
  "execMap": {
    // ts파일을 실행시키면 node 대신 ts-node로 구동
    // nodemon src/index.ts === nodemon `ts-node src/index.ts`
    // npx nodemon --exec "ts-node src/index.ts"
    "ts": "ts-node"     

},
  "watch": ["src"],
  "ext": "js,json,ts"  // watch file 확장자
}

```
## add scripts

```
   "dev": "nodemon src/index.ts"
```