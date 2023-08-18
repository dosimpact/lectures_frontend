// 생성자 인터페이스 -> 스태틱 검사
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
// 함수 프로퍼티 인터페이스 -> 인스턴스 검사
interface ClockInterface {
  tick(): void;
}
//
function createClock(
  ctor: ClockConstructor, // 클래스를 받는다.
  hour: number, // 생성자 인자들
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}
// ---
// 인터페이스 구현체들
class DigitalClock implements ClockInterface {
  // ✅ 클래스의 생성자는 static 이다.
  constructor(h: number, m: number) {} // ClockConstructor에 의해 검사 받음
  tick() {
    // ClockInterface에 의해 구현됨
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}
// ✅ createClock - 1번째 인자 : 생성자 시그니처 확인
// ✅ createClock - 2,3번째 인자 생성자에 필요한 시그니처
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
