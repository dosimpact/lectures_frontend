const { observable, autorun, runInAction } = require("mobx");

// runInAction : 액션(상태변화)를 단위로 묶어서 실행,
//  - 일련의 액션들을 묶어서 하나의 액션으로 처리함.

const state = observable({
  name: "dodo",
  age: 21,
});
const state2 = observable({
  name: "sky",
  age: 40,
});

autorun(() => {
  console.log("something is changed state1", state.name, state.name);
});

autorun(() => {
  console.log("something is changed state 1 or 2", state.name, state2.name);
});

autorun(() => {
  console.log("something is changed state2", state2.name, state2.name);
});

runInAction(() => {
  state.name = "updated";
  state.age = 100;
});

runInAction(() => {
  state2.name = "updated";
  state2.age = 200;
});

/*
// observable 이 만들어짐
something is changed state1 dodo dodo
something is changed state 1 or 2 dodo sky
something is changed state2 sky sky
---
// state1 변화
something is changed state1 updated updated
something is changed state 1 or 2 updated sky
---
// state2 변화
something is changed state 1 or 2 updated updated
something is changed state2 updated updated
*/
