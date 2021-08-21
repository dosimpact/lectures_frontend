▣ 22장: this

## 22.1 this 키워드

## 22.2 함수 호출 방식과 this 바인딩

### this 바인딩

함수를 호출하는 방법(아래 4가지)에 따라 this식별자에 어떤 값을 넣을지 동적으로 결정된다.

## 22.2.1 일반 함수 호출

기본적으로 전역객체가 할당된다.

- 엄격모드에서는 undefined이다.
- 객체안의 매서드에서 호출한 함수라도 this는 전역객체이다.
- setTimeout 등 함수의 콜백함수도 this가 바인딩 된다.

* 일반함수에서 this 바인딩 하기
  1.  that-this이용
  2.  bind,apply,call 이용
  3.  화살표 함수 이용 (상위 스코프의 this를 가르킨다.(호출객체가 아닌))

## 22.2.2 메서드 호출

메서드를 호출한 객체에 바인딩이 된다.

- 매서드는 프로토타입객체에서 공유하는 함수이다.
- Person.prototype.getName() -> Person.prototype 가 바인딩
- new Person({name:""}) -> 인스턴스가 바인딩
- anotherPerson.getName = getName -> anotherPerson 인스턴스가 바인딩

## 22.2.3 생성자 함수 호출

생성자 함수 내부의 this는 미래의 인스턴스를 바인딩한다.

## 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출

this를 명시적으로 바인딩 한다.

- bind를 이용해서 this를 바인딩한 함수 자체를 리턴
- apply,call은 this를 바인딩하고 호출까지 한다.
- **call**은 인자를 []로 넘긴다.
- Array.prototype.slice.call(arguments(유사배열)) 처럼 this바인딩을 활용
