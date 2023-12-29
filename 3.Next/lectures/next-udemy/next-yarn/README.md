

## 백그라운드

### npm install yarn -g 을 이용해서 설치하면 yarn은 최신버전이 아니다.   
- yarn -v // 1.22.19  
- 1.xx 버전을 유지하는 이유는 기존 생태계의 호환성을 위해서이다.  
- 최신버전으로 업데이트하면 완전 다른 인터페이스를 보게될 것이다.  

### 모듈을 설치하는 3가지 방식 

Install modes
- nodeLinker: pnp : Plug'n'Play 이며, node_modules를 생성하지 않는다.  
- nodeLinker: pnpm : yarn과 유사한 방식의 패키지 매니저의 방식    
- nodeLinker: node-modules : node_modules를 만드는 일반적인 방식   


### zero install  

1.yarn의 pnp를 사용한다.  
2.pnp를 git으로 버전관리하여, 의존성 모듈을 깃허브에 올린다. 

- 따라서 git clone 만으로도 의존성 모듈이 따라온다.  


## yarn v4 을 사용하면 좋은 점

```
# 최신버전의 yarn(berry) 사용 설정
yarn set version stable

# 버전 확인 - 4.0.2
yarn -v

# 패키지 설치
yarn
# package.json에  "packageManager": "yarn@4.0.2" 가 추가된다.
# .yarnrc.yml 파일이 추가되며, nodeLinker: node-modules 가 기본설정이다. 

# 개발모드로 띄워보기
yarn dev

---
# .gitignore 에 추가
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

---
# Plug'n'Play 전환
# .yarnrc.yml 파일에서, nodeLinker: pnp로 변경
# 패키지 다시설치
yarn

# 개발모드로 띄워보기
yarn dev
```


--- 

## ref

Release: Yarn 4.0 🪄⚗️ https://yarnpkg.com/blog/release/4.0
https://velog.io/@creco/next.js-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0 
