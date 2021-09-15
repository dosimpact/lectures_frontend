# Ajax

## 43.1 Ajax란

- Ajax : asynchronous Javascript and XML
- 비동기 방식으로 서버에 데이터를 요청하여, 웹페이지를 동적으로 업데이트 하는 프로그래밍 방식
- XMLHttpRequest객체를 사용해서 구현

## 43.2 JSON

- JSON : javascript Object Notation
- HTTP 통신을 위한 텍스트 데이터 포멧
- 직렬화 (Serializing) : 객체를 문자열화(string)
- 역직렬화 (Deserializing) : 문자열을 객체화

* JSON.stringify, JSON.parse 이용

## 43.3 XMLHttpRequest

[1] XMLHttpRequest의 프로토타입 프로퍼티

- 1. readyState
- HTTP 요청의 현재 상태를 나타낸다.
- UNSENT, OPENED ,HEADERS_RECEIVED, LOADING, DONE

- 2. status ,statusText
- HTTP 요청에 대한 응답 (2xx,4xx), 응답 메시지

- 3. responseType, response, responseText
- 응답 타입, 응답 몸체, 응답 문자열

[2] XMLHttpRequest의 이벤트 핸들러 프로퍼티

- 1. onload, onerror
- 요청에 성공, 실패한 경우

- 2. 그외
- readState 변화시
- 응답 받기 시작 , 응답 받기 (완료,실패) 완료 시
- 요청 시간 초과시
- 요청 중단 시 ( absort ) 등 있음

[3] XMLHttpRequest 객체의 매서드

- 1. open,send,abort
- 요청 초기화, 전송, 중단
- 2. setRequestHeader, getResponseHeader
- 요청 헤더값 설정 , 응답 헤더값 문자열 변환

[4] XMLHttpRequest 객체의 정적 프로퍼티

- 1. readState의 상태가 정의되어 있음
