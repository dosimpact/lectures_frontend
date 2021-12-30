let i = 0;

const foo = function () {
  if (i == 3) return;
  else {
    console.log(i++);
    foo();
  }
};

foo();
