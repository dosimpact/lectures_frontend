# 클린코드 자바스크립트

ref)
https://www.udemy.com/course/clean-code-js/

---

- [ ] var - let,const
- [ ] 호이스팅
- [ ]

# Sec2 - Variable

전역 공간 사용을 최소화 하자.

    var 사용 지양
        글로벌 스코프 오염 가능
        function scope 임을 주의

    임시변수 최소화 하기

        객체 mutable 최소화
            dot연산으로 접근하여 객체를 변경하는것은 지양

        하나의 뚱뚱한 함수를 만드는것도 좋지 않다.
            하나의 수정이 여럿 수정으로 번질 수 있다.
            10 곳 이상에서 반복해서 사용 된다면 책임 분리

    호이스팅 주의

        var, funtion 은 함수 스코프 안에서
        선언이 상단으로 올라가게 된다. 그 이후 할당이 된다.

        => 함수표현식으로 선언과동시에 할당이 되도록 한다.

# Sec3

타입 다루기

    typeof가 만능은 아니다.


```js
자바스크립트에는 여덟 가지 기본 자료형이 있습니다.

숫자형 – 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.
bigint – 길이 제약 없이 정수를 나타낼 수 있습니다.
문자형 – 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.
불린형 – true, false를 나타낼 때 사용합니다.

null – null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.
undefined – undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.
객체형 – 복잡한 데이터 구조를 표현할 때 사용합니다.
심볼형 – 객체의 고유 식별자를 만들 때 사용합니다.

typeof 의 리턴값 역시 8가지지만, 프리미티브 타입과 다르다.
 - null 대신 function 이 있음을 유의

typeof 0 // "number"
typeof 10n // "bigint"
typeof "foo" // "string"
typeof true // "boolean"


typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof undefined // "undefined"
typeof Symbol("id") // "symbol"
typeof alert // "function"  (3)

```
