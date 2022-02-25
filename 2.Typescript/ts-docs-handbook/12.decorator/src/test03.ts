// 생성자가 호출되고, 아래 데코레이터로인해 추가 프로퍼티

/* cf) 생성자 인터페이스
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
} */

/* cf) 
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T)
- 1) T extends 는 제너릭 제약이다.
적어도 뒤에 나오는 타입을 갖춘 타입을 받을 수 있다.

-2)  { new (...args: any[]): {} } 는 생성자 타입이다.
- new 라는 키워드가 특징이다.
- 생성자 함수 리턴 타입이 {} 이므로 빈 객체를 생성하는 부분
- 생성자의 매개변수는 ...args로 받는다. any[] 타입으로 ~

*/
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter2 {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter2("world"));
