// ✅ 1. getter,setter
// - 데이터 프로퍼티와 다른 정의를 내린다.
// - 접근자 프로퍼티 ✔️
const user = {
  firstName: "John",
  lastName: "dodo",
  age: 14,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullname) {
    [this.firstName, this.lastName] = fullname.split(" ");
  },
};
console.log(user.fullName); // John dodo
user.fullName = "kim doyoung";
console.log(user.fullName); // kim doyoung

//✅ 2. Object.defineProperty 로 getter/setter 정의
let user2 = {
  fName: "fname",
  lName: "lname",
};
Object.defineProperty(user2, "fullname", {
  get() {
    return `${this.fName} ${this.lName}`;
  },
  set(value) {
    [this.fName, this.lName] = value.split(" ");
  },
});
console.log(user2.fullName); // undefined
user2.fullName = "dodo kim";
console.log(user2.fullName); // dodo kim

// ✅ 3. 호환성을 위해서 사용한 예시
// - user3 객체에는 age가 있다.
// 하지만 birthday로 변경해야 하고, 기존의 코드들은 user3.age를 바꾸지 않도록 해야한다.
// get/set 이용해 age 요청시 birthday로 어탭트 시켜주자.

const User = function (name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, "age", {
    get() {
      return new Date().getFullYear() - this.birthday.getFullYear();
    },
    set(date) {
      this.birthday = date;
    },
  });
};
const user3 = new User("dodo3", new Date("1996-06-03"));
console.log(user3.age); // 25
console.log(user3.birthday); // 1996-06-03T00:00:00.000Z
