var math = math || {}; // math의 네임스페이스 정의

(function () {
  // sum 함수의 정의
  function sum(a, b) {
    return a + b;
  }
  math.sum = sum; // 네임스페이스 등록
})();
