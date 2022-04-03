# Micro-frontend React, 점진적으로 도입하기



### 레포 관리

독립적인 패키지들로 분리하기   

- 인프라 패키지 : 동일한 빌드 툴링을 공유한다.   
- 라이브러리 패키지 : 공통 소스코드를 관리하기 위한 패키지 (eg,uicomponents). 
- 서비스 패키지  : 페이지에서 독립적으로 작동  

최초 구현 : Yarn workspace + lerna      
현재 구현 : Yarn2 Workspace Plugin.  

이점   
- 소스코드, 빌드 설정 격리. 
- 의존성 지옥 탈출. 
- 빌드 속도 최적화  : Yarn Zero-Installs. 

