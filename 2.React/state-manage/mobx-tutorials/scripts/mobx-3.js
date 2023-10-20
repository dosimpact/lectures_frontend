const { observable, autorun, runInAction, reaction } = require("mobx");

// autorun : observable 객체의 변화 감지
// reaction : observable 객체의 프로퍼티 변화 감지.

const state = observable({
  name: "dodo",
  age: 21,
});

autorun(() => {
  console.log("something is changed state1", state.name, state.age);
});

reaction(
  () => {
    return state.age;
  },
  () => {
    console.log("state 나이 변경", state.age);
  }
);

runInAction(() => {
  state.name = "updated";
});
runInAction(() => {
  state.age = 100;
});
/*
something is changed state1 dodo 21
something is changed state1 updated 21
something is changed state1 updated 100
state 나이 변경 100
*/
