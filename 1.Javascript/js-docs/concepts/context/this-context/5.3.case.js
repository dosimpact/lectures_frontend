// ✅ case 3.1 클래스안에서 일반함수+bind vs 화살표함수
//  - class 안에서 매서드는 일반함수보다는 arrow function을 사용해서
// 생성자에서 bind를 하는 수고를 덜자 ❌ 틀린이유는?

class Component {
  constructor() {
    this.name = "dodo";
    this.buttonEl = document.querySelector("#test");

    this.buttonEl.addEventListener("click", this.handleClick);
    this.handleClickBind = this.handleClickBind.bind(this);
    this.buttonEl.addEventListener("click", this.handleClickBind);
    this.buttonEl.addEventListener("click", this.handleClickArrow);
  }
  // ✅ this를 event.currentTarget 객체로 받는다.
  handleClick(e) {
    console.log("handleClick : ", this.name, this, e);
  }
  // ✅ this는 이 클래스를 가르킨다. (bind를 생성자에서 했기때문)
  handleClickBind(e) {
    console.log("handleClickBind : ", this.name, this, e);
  }
  // ✅ this는 정적스코프에 따라 이 클래스를 가르킨다.
  handleClickArrow = (e) => {
    console.log("handleClickArrow : ", this.name, this, e);
  };
}

const app = new Component(document.querySelector("#app"));

// handleClick :   <button id=​"test">​test me​</button>​
// handleClickBind :  dodo Component {name: 'dodo', buttonEl: button#test, handleClickArrow: ƒ, handleClickBind: ƒ}
// handleClickArrow :  dodo Component {name: 'dodo', buttonEl: button#test, handleClickArrow: ƒ, handleClickBind: ƒ}
