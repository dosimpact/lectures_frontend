function t(x: number): (number)=>number { // 바깥 유효 범위
  return function(y:number): number { // 안쪽 유효 범위
    return x + y
  } // 안쪽 유효 범위 끝
} // 바깥 유효 범위 끝