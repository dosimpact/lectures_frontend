

1.모노레포
- 루트 : package.json 있어야 한다.  
  - private:true 이어야 한다.  
  - 하위 packages 경로를 표시해야 한다.   
- 하위 packages/module-a 에도 각각 package.json이 존재 해야 한다.  
- yarn install로 symlink를 만들어야 한다.    

2.호이스팅  
- module-a/에서 lodash를 설치하면  
- module-b/에서 lodash를 사용할 수 있다.  
- 왜냐하면 root 모듈로 호이스팅(심링크)되기 때문이다.  
- 이를 막기 위해서 옵션이 있다. nohoist  

```json
  "workspaces": {
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/lodash"
    ]
  },
```
