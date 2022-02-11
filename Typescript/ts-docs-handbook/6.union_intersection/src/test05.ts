// eg) 두 객체를 extends<T1,T2>
// 단, 함수는 T1, T2 객체의 key를 알아내어, 공통된 key만  허용되어야 한다.

// Person , loggable 객체를 합칠 예정임
class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  // JS에서 클래스의 맴버 함수는 prototype 에서 확인 가능하다.
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

// 두 객체를 받아 하나로 합칩니다.
// 단 조건을 합칠때, 함수 제너릭에 의해 First와 Second의 key 만 허용된다.
function extend<First extends {}, Second extends {}>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
