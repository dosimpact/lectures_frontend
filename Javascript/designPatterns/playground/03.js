// 실행 컨텍스트와 프로토타입 + this.

// 호이스팅 분석,
// 클로저 분석,
// this 체인 스코프 분석
// 프로토타입 체인 분석

var name = "zero"; // (1)변수 선언 (6)변수 대입
function wow(word) {
  // (2)변수 선언 (3)변수 대입
  console.log(word + " " + name); // (11)
}
function say() {
  // (4)변수 선언 (5)변수 대입
  var name = "nero"; // (8)
  console.log(name); // (9)
  wow("hello"); // (10)
}
say(); // (7)
/**
컨텍스트는 전역컨텍스트, 함수컨텍스트가 있다.

[ 컨텍스트의 구성 ]
컨텍스트는 변수객체(arguments,variable), scope chain, this 로 구성
>다음 형태로 쓸 수 있다.
'전역 컨텍스트': {
  변수객체: {
    arguments: null,
    variable: ['name', 'wow', 'say'],
  },
  scopeChain: ['전역 변수객체'],
  this: window,
}
- 변수객체에는, 함수 호출 인자와, 본인 스코프의 변수가 있다.
- 스코프체인에는, 상위 스코프의 변수객체가 들어 있다.
- this는 바인딩된 this를 가르킨다.


[ 컨텍스트의 라이프싸이클 ]
1. 전역컨텍스트가 먼저 생성된다.
2. 함수가 호출될때마다 컨텍스트가 하나씩 생성된다.
3. 변수를 찾는과정 , 자신의 컨텍스트의 변수객체를 찾는다 없다면 상위 스코프체인으로 올라가서 찾는다.
4.  클로저를 제외하고, 함수 실행이 마무리되면 컨텍스트를 사라진다.

[ 컨텍스트 체인의 룰 ]

전역 스코프 -> say함수 스코프 -> wow함수 스코프 이런 방식으로
함수들이 호출된다.

콜스택은    Say>wow 처럼 생각하면 되고 
스코프체인은 Global > wow 라고 생각하면 된다. ( lexical 을 따름 )

[ 호이스팅 해석 ]
변수 호이스팅이나, 함수 호이스팅(함수 선언식 일때)
변수 선언과 동시에 대입이 진행되며, 이는 즉각 Global 컨텍스트의 변수객체에 등록된다.

[ 클로저 해석 ]
https://velog.io/@smp2103/%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80#%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EB%85%90
이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저 라고 한다.
(자유변수를 포함하고 있는 함수)
내부함수가 생성될을 당시의 외부환경(lexical environment)를 기억하는 함수이다.

- 가장 흔한 클로저 형태
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  return innerFunc
}
var inner = outerFunc();
inner(); // 10

- Global Context - Outer Context
                 - Inner Context  형태로 컨텍스트가 만들어지는데
- inner Context는 생성 당시 외부 환경에 대한 스코프체인을 가지고 있고, 이는 Outer Context이다.
*주의 ( 꼭 스택처럼 Outer Context 위 inner context가 생긴것 처럼 느껴진다만 그렇지 않다. )

[ this 해석 ]
실행컨텍스트에는 this에 대한 바인딩 정보가 있고, 이는 this가 참조하는 객체가 무엇인지
(*체인 아님) 들어 있다.

[ prototype 해석 ]
실행컨텍스트 상관이 있나 ? ( https://meetup.toast.com/posts/104 ) 
- 변수를 찾는 과정은 스코프 체인이고
객체.프로퍼티 을 통해 프로퍼티를 참조할때는
- 프로퍼티를 찾는 과정이 프로토타입 체인 이다.

*/
