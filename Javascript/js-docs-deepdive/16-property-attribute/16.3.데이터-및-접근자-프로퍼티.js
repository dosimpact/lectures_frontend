/**
 * ✅ 16.3 데이터 프로퍼티와 접근자 프로퍼티

✅ 프로퍼티의 두 종류
- 1. 데이터 프로퍼티 
- 키와 값으로 구성된 일반적인 프로퍼티

- 2. 접근자 프로퍼티
- getter/setter 접근자 함수로 값을 호출하거나 저장
- 자체적으로 값을 가지지 않는다.

✅ 데이터 프로퍼티의 어트리뷰트(상태)
1. [[Value]] : 키를 통해 접근하면 반환되는 값
2. [[Writable]] : 프로퍼티값의 변경 가능 여부
- false인 경우 value를 수정할 수 없다.
3. [[Enumerable]] : 열거 가능 여부
- false인 경우, for...in, Object.keys로 열거 불가능
4. [[Configurable]] : 프로퍼티 재정의 가능 여부
- false인 경우, 프로퍼티 삭제,값의 변경 금지
(단, writable=true인 경우, value변경 가능, writable=false 변경 가능)


✅ 접근자 프로퍼티의 어트리뷰트(상태)
1. [[Get]] 접근자 프로퍼티 키로 값에 접근시 호출되는 함수
2. [[Setter]] 접근자 프로퍼티 키로 값을 저장시 호출되는 함수
3. [[Enumerable]] : 위와 동일
4. [[Configurable]] : 위와 동일


cf)
프로토타입 : 어떤 객체의 부모객체의 역할을 하는 객체
프로토타입 체인 : 프로토타입이 단방향 링크드 리스트 형태로 연결되어있는 상속 구조
 */

// ✅ eg) 데이터 프로퍼티, 접근자 프로퍼티
// - 데이터 프로퍼티의 초기값은 엔진이 정의한다.

const person = {
  firstName: "lee",
  lastName: "dodo",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName + " " + person.lastName); //lee dodo
console.log(person.fullName); // lee dodo

person.fullName = "kim nana";

console.log(person.firstName + " " + person.lastName); //kim nana
console.log(person.fullName); // kim nana

console.log(Object.getOwnPropertyDescriptors(person));
// {
//   firstName: {
//     value: 'kim',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'nana',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   fullName: {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
//   }
// }

// ✅ eg) 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
/*
- 일반객체의 __proto__는 접근자 프로퍼티
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/
// - 함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function () {}, "prototype");
// { value: {}, writable: true, enumerable: false, configurable: false }
