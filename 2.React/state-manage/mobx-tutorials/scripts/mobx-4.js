const { observable, autorun, reaction, action } = require("mobx");

// action : runInAction은 바로 실행되지만, 액션은 나중에 호출 시 실행되도록 함.

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

const changeName = action(() => {
  state.name = "updated";
});
const changeAge = action((age) => {
  state.age = age;
});

changeName();
changeAge(100);
changeAge(102);

/**
something is changed state1 dodo 21
---
something is changed state1 updated 21
something is changed state1 updated 100
state 나이 변경 100
something is changed state1 updated 102
state 나이 변경 102
*/
