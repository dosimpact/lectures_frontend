const { observable, autorun, runInAction } = require("mobx");

// observable : 변화를 감지할 객체를 감싸는 HOF

// runInAction : 액션(상태변화)를 단위로 묶어서 실행,
//  - 일련의 액션들을 묶어서 하나의 액션으로 처리함.
// action : runInAction은 바로 실행되지만, 액션은 나중에 호출 시 실행되도록 함.

// autorun :  observable 객체의 생성시 -> 콜백호출
//            observable 객체의 변화 감지 -> 콜백호출
// reaction : observable 객체의 프로퍼티 변화 감지 -> 콜백호출

const state = observable({
  name: "dodo",
  age: 21,
});

autorun(() => {
  console.log("something is changed 1", state.name, state.age);
});

runInAction(() => {
  state.name = "updated";
  state.age = 100;
});

runInAction(() => {
  state.name = "updated";
  state.age = 200;
});
