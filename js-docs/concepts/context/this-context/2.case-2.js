var value = 100;

// ✅ case2. 내부함수 호출을 this(바인딩) 대신 that(스코프)으로 해결

var obj = {
  value: 1,
  func1: function () {
    // 변수 that에 this 저장
    var that = this;
    this.value += 1;
    console.log(this.value); // 2 출력

    // func2 내부 함수
    func2 = function () {
      that.value += 1;
      console.log(that.value); // 3 출력

      // func3 내부 함수
      func3 = function () {
        that.value += 1;
        console.log(that.value); // 4 출력
      };

      func3();
    };

    func2();
  },
};

obj.func1();
