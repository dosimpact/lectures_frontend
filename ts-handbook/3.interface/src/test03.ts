interface ClockConstructor {
  new (hour: number, minute: number): any;
}
//  TypeError 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
// class Clock implements ClockConstructor {
//   // 인터페이스 implements는 인스턴스만 검사
//   // 생성자는 static이므로, 검사대상 제외 -> 즉 인터페이스가 구현이 안된 상태
//   constructor(h: number, m: number) {}
// }
