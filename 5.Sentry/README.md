
- [onboarding](#onboarding)
  - [](#)
  - [애러 데이터 분석](#애러-데이터-분석)
  - [유의미한 애러 선별적 수집](#유의미한-애러-선별적-수집)
  - [성과](#성과)
- [공식문서](#공식문서)
  - [Key terms](#key-terms)


# onboarding

setnry
- 데이터 수집
- 모니터링
- 애러 데이터 분석

react 
- 기존의 애러 처리, error boundaries, 선언적 애러처리, 

문제점 
- 다양한 웹브라우저 환경 + 유저의 운영환경에서 발생하는 오류 추적이 쉽지 않음

애러의 카테고리 분류
- 랜더링 애러 , 리액트(JSX) 코드에서 발생하는 애러
- 데이터 처리 오류 , JS 코드에서 발생하는 애러 
- 서버 응답 오류 , 
- 외부 장애 애러 , 

## 

scope
- 글로벌 스코프 : 웹페이지 전체에 걸친 로깅에 들어가는 프리셋 정보 ( eg, userId )
- 로걸 스코프 : 특정 페이지, 컴포넌트의 로깅에 들어가는 프리셋 정보 ( eg, currentPage )

tag
- 검색, 모니터링, 얼럿에 사용 

level
- 애러 레벨 , 식별자

Fingerprint
- 이슈를 그룹화 해주는 기능
- method, status, url


## 애러 데이터 분석 

ChunkLoadError
ApiTimeoutError
ReferenceError
TypeError
apiInternalServerError
ApiNotFoundError
apiNotFoundError

## 유의미한 애러 선별적 수집

1. 
chunk load, network 애러는 수집 제외 이는 사용자환경에 따라 발생
단, timeout error 는 수집

2. 
분석하고자 하는 API의 http status를 구분하여 수집, -500애러 수집, 4xx선별적 수집

3. 
애러 데이터뿐 아니라 디버깅과 분석에 필요한 추가적인 정보 수집

4. 서버와 연결되는 custom header룰 추가하여 로깅

x-request-id :'' 등 사용하여 서버로그와 대조하여 추적

## 성과

브라우저 하위 버전에서 발생하는 애러를 추적했다. - 폴리필 추가로 대응 
장애 탐지 시간 - 원인 파악 - 해결 까지 시간 감소 > CS 안내 정확하게 대응 
개발자 경험이 좋아졌다.


# 공식문서

## Key terms

핵심 컨셉
- 경고 : 특정 조건 > 얼럿(슬랙 노티)
- 첨부 : 사용자 환경설정 파일 
- 데이터 : 애러와 메타데이터 전송
- env : dev, stage, prod 환경에 따른 설정
- 이슈 : 핑거프린트 기능 , 특정 애러 이벤트 나 낮은 퍼포먼스 이벤트 발생했을때, 그룹핑을 통해 영향을 받은 사용자들을 파악
- 성능 모니터링 :  