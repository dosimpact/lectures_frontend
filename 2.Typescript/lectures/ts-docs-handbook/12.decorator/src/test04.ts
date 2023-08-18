// eg) 클래스에 , 프로퍼티를 추가하고 freeze 하는 데코레이터 연습
// 1) 데코1 : 속성 추가, 2) 데코2 : freeze 하기

// 방법 : 속성을 먼저 추가하고 freeze 하자

function MarkDo<
  T extends {
    new (...args: any[]): {};
  }
>(constructer: T) {
  return class extends constructer {
    marking = "by dosimpact";
  };
}

function FreezeObj(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

@FreezeObj
@MarkDo
class HandBook {
  constructor() {}
}

console.log(new HandBook());
