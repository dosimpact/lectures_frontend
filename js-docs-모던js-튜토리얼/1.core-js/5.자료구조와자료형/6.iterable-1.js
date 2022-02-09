// https://ko.javascript.info/iterable
/**
 * iterable 객체 - 배열을 일반화한 객체
 *  Symbol.iterator 을 가지므로써 for...of 을 사용할 수 있다.
 *  아래 코드는 "관심사의 분리" SoC Seperation of concern 적용
 *      range 객체에 next 함수가 없음
 */

let range = {
  from: 1,
  to: 5,
};
// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function () {
  // Symbol.iterator는 이터레이터 객체를 반환합니다.
  // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from,
    last: this.to,
    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    // 객체에 next 함수는 필수
    next() {
      // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// 이제 의도한 대로 동작합니다!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
