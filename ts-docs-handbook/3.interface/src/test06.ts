interface Counter {
  (start: number): string; // 이거만 보면 하나의 함수인데
  interval: number; // 변수 ( := number )
  reset(): void; // 함수 변수도 있음
  undo: () => void; // 변수 ( := 함수 )
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  counter.undo = () => console.log("undo");
  return counter;
}
let c = getCounter();

console.log(c);
c(10);
c.interval = 5.0;
c.reset();
c.undo();
