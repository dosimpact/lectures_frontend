"use strict";

// ✅ Activity라는 부모 클래스 생성
// - Activity 프로퍼티
function Activity(amount) {
  this.amount = amount; // public 프로퍼티
}

// - Activity 메서드
// amount 에 대한 setter,setter
Activity.prototype.setAmount = function (amount) {
  if (amount <= 0) return false;
  this.amount = amount;
  return true;
};

Activity.prototype.getAmount = function () {
  return this.amount;
};
// --------------------------
// ✅ Payment라는 자식 클래스 1 생성
// - Payment 프로퍼티
function Payment(amount, receiver) {
  Activity.call(this, amount); // super
  this.receiver = receiver; //
}
// - Payment 상속
Payment.prototype = Object.create(Activity.prototype); // extends
Payment.prototype.constructor = Activity; // ?

// - Payment 메서드
Payment.prototype.setReceiver = function (receiver) {
  this.receiver = receiver;
};
Payment.prototype.getReceiver = function () {
  return this.receiver;
};
// -------------
function Refund(amount, sender) {
  Activity.call(this, amount);
  this.sender = sender;
}
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Activity;

Refund.prototype.setSender = function (sender) {
  this.sender = sender;
};
Refund.prototype.getSender = function () {
  return this.sender;
};

// ✅ activity와 Activity.prototype의 프로퍼티 확인
const activity = new Activity(500);
console.log(activity); // Activity { amount: 500 }
console.log(activity.getAmount()); // 500
console.log(Activity.prototype.hasOwnProperty("setAmount")); // true
console.log(Activity.prototype.hasOwnProperty("getAmount")); // true
// Activity.prototype 에는 자식에서 만든 메서드가 없는 것이 당연
console.log(Activity.prototype.hasOwnProperty("setSender")); // false
console.log(Activity.prototype.hasOwnProperty("getSender")); // false

// ✅ refund와 Refund.prototype의 프로퍼티 확인
const refund = new Refund(1000, "john");
console.log(refund); // Activity { amount: 1000, sender: 'john' }
console.log(refund.getAmount()); // 1000
//
console.log(Refund.prototype.hasOwnProperty("setAmount")); // false
console.log(Refund.prototype.hasOwnProperty("getAmount")); // false
// Refund.prototype 에 정의된 메서드 이다.
console.log(Refund.prototype.hasOwnProperty("setSender")); // true
console.log(Refund.prototype.hasOwnProperty("getSender")); // true

// ✅ refund의 프로퍼티 확인
// refund
// refund.__proto__
// refund.__proto__.__proto__

// refund를 만들어낸 프로토 타입에는  setSender 있음 ( static method )
console.log(refund.__proto__.hasOwnProperty("setSender")); // true
// 하지만 분명히 setAmount을 쓸 수 있는데, 본인이 가진 프로퍼티는 아님
console.log(refund.__proto__.hasOwnProperty("setAmount")); // false
// 한단계 올라가서 있음
console.log(refund.__proto__.__proto__.hasOwnProperty("setAmount")); //true
