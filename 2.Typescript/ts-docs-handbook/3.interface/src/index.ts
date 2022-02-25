// interface signature
interface Sample {
  num: number;
  str?: string; // primitive type
  bool?: boolean;
  [arg: string]: any; // indexable type
  (a: number, b: number): boolean; // function type
  callback: (e: string) => boolean; // property - lambda
  setName(name: string): void; // classtype - function
  new (hour: number, minute: number): any; // class constructor type
}

// interface
import "./test01";

// 초과 프로퍼티 검사
// 목적 : optional 조건을 만족해도 , 초과프로퍼티는 제한된다.
import "./test02";

// 인터페이스는 클래스의 스태틱(생성자 포함 )을 검사하지 않는다.
import "./test03";

// 1 스태틱 검사 interface + 인스턴스 검사 interface => class구현
// create 함수 이용
import "./test04";

// 2 스태틱 검사 interface + 인스턴스 검사 interface => class구현
// const 객체 이용해서 타입 검사  ( 더 간단 )
import "./test05";

// 하이브리드 타입
// 객체를 호출할수도, 맴버 변수도 있음
import "./test06";
