class Parent {
  getName = () => {
    console.log("my name is 심재철");
  };
}
class Child extends Parent {
  getName() {
    console.log("my name is 자식");
  }
}
new Child().getName();
