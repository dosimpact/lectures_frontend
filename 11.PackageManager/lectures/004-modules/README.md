

# script,bin  

- packages/module 들 뿐 아니라, 모듈안에서 정의된 bin까지도 호이스팅 된다. 

```js
// packages/module-b/package.json
// - mdb라는 명령어는 index.js를 실행시킨다.  
{
  "name": "module-b",
  "main": "index.js",
  "bin":{
    "mdb":"./index.js"
  }
}
---
// 단 "#!/usr/bin/env node" 부분이 없다면 쉘스크립트로 실행하기 때문에 이를 node로 실행시키도록 하자.  
// packages/module-b/index.js

#!/usr/bin/env node
console.log("module-b");
---
// 루트로 돌아와서 아래 명령어를 수행하면, 루트 node_modules에 .bin/mdb의 심볼링 링크가 걸린것을 볼 수 있다.  
yarn install --force

// 그러면 이제 yarn mdb 명령어를 어디든 사용할 수 있다. 
---
//package.json
{
  "name": "004-modules",
  "main": "index.js",
  "private": true,
  "workspaces":{
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/lodash"
    ]
  },
  "scripts": {
    "start": "module-b"
  }
}
---
// packages/module-a/package.json
{
  "name": "module-a",
  "main": "index.js",
  "scripts": {
    "start": "mdb"
  }
}

```