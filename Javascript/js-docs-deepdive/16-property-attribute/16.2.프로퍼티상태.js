/*
✅ 16.2 프로퍼티 어트리뷰트 와 프로퍼티 디스크립터 객체

프로퍼티 어트리뷰트 : 
- 객체는 프로퍼티를 가진다.
- JS엔진은 프로퍼티를 생성시, 프로퍼티의 어트리뷰트의 기본값(상태)를 정의한다.
- 프로퍼티 상태 : value, writable, enumerable, configurable 
- * 값 , 값의 갱신 여부, 열거 가능 여부, 재정의 가능 여부 를 뜻한다.

getOwnPropertyDescriptor: 프로퍼티의 상태를 표현하는 디스크립터 객체를 리턴
*/
const person = {
  name: "lee",
};
person.age = 23;

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: 'lee', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(person));
// {
//     name: {
//       value: 'lee',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 23, writable: true, enumerable: true, configurable: true }
//   }
