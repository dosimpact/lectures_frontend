const { observable, runInAction, reaction, action, autorun } = require("mobx");

const store = observable({
  name: "do",
  age: 20,
});

autorun(() => {
  console.log("store : ", store.name, " ", store.age);
});
reaction(
  () => store.name,
  () => {
    console.log("name changed", store.name);
  }
);
const changeName = action((name) => {
  store.name = name;
});

runInAction(() => {
  store.name = "dododo";
});
changeName("kdy");
