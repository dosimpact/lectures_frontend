function foo3() {
  return {
    first: "hyojin",
    last: "lee",
    asyncFn: function () {
      console.log(this); // {first: "hyojin", last: "lee", setTimeFunc: ƒ}
      setTimeout(() => {
        console.log(this.first);
      }, 100);
    },
  };
}
let bar3 = foo3();
bar3.asyncFn(); // hyojin
