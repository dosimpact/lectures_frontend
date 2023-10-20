const { observable, autorun, runInAction } = require("mobx");

// 데코레이터 문법을 위해서, 바벨셋팅을 해야한다, (jsconfig는 뭐지..?!)
class OrderLine {
  @observable price = 0;
  @observable amount = 1;
}
