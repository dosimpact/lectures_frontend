// 0. 원형
// 데코레이터 팩토리
function color(value: string) {
  return function (target: unknown) {
    // 데코레이터
    // 'target'과 'value' 변수를 가지고 무언가를 수행합니다.
  };
}

// 1. 데코레이터의 합서
// 평가 - top down , 실행 - bottom up
// import "./test01";

// 2. 클래스 자체 <- 데코레이터
import "./test02";

// 3. 클래스 생성자 <- 데코레이터
import "./test03";

// 4. eg)  2+3
import "./test04";
