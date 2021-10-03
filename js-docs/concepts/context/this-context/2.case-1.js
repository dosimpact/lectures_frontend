// ✅ 함수를 호출할 때의 this 바인딩

// ✅ case1.객체 매서드의, 내부 함수호출은 일반함수 호출이므로, window 객체가 바인딩 된다.

// 전역변수 value 정의
var value = 100;

// obj 객체 생성
var obj = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log(this.value); // 2 출력

    // func2 내부 함수
    func2 = function () {
      this.value += 1;
      console.log(this.value); // 101 출력

      // func3 내부 함수
      func3 = function () {
        this.value += 1;
        console.log(this.value); // 102 출력
      };

      func3(); // func3() 내부 함수 호출
    };

    func2(); // func2() 내부 함수 호출
  },
};
obj.func1(); // func1() 메서드 호출
