# REST API

REST 설계 원칙을 지킨 서비스 디자인을 RESTful 하다 라고 표현  
REST 설계를 구현하기위해 HTTP프로토콜 등이 사용 된다.

## 44.1 REST API 의 구성

REST API의 구성은 자원,행위,표현
각각 URL, HTTP 매서드, 페이로드로 표현한다.

## 44.2 REST API 설계 원칙

핵심 규칙

- URL로 리소스를 표현하는데 집중
- 행위는 HTTP 요청 메서드를 통해 한다.

URL 리소스 표현 규칙

- 동사보단 명사를 사용 한다.
- (복수형)명사를 사용한다.
- 대문자를 사용하지 않고 공백은 - 을 사용

HTTP 요청 매서드 규칙

- GET 리소스 취득 (payload 없음)
- POST 리소스 생성
- PUT,PATCH : 리소스 전체 교체, 일부 교체
- DELETE 리소스 삭제 ( payload 없음 )
