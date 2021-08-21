## strict mode 적용

```
<html>
...
<script>"use strict"...</script>
<script>...</script>

- 위 처럼 태그안에 엄격모드를 선언하는 것은 해당 태그 안에서만 작동한다.

함수 단위로 적용하는것 회피
- 매번 strict을 쓸수도 없는 노릇
- 대신 즉시 실행함수를 만들어서 함수 스코프 단위로 적용 하도록
- non strict과 strict을 섞을때도 문제가 발생한다.
- 외부 라이브러리 중 non strict이 있을 수 있으니 글로벌한 strict은 피하자.


```

요약

- 함수범위마다 strict 적용 -- 비추천
- 전역범위에서 strict 적용 -- 비추천 (non strict 라이브러리 충돌)
- 즉시실행함수 strict 적용 -- 추천 👏

## strict mode 가 발생하시키는 애러

1. implicit-global

2. 변수,함수,매개변수에 delete

3. 중복 매개변수

4. with 의 사용

## strict mode 적용에 의한 변화

1. 일반함수의 this

   - 생성자 아니면 this는 undefined

2. arguments 객체
   - 불변
