// eg) Partial<T> , Required<T>
// Partial : 프로퍼티 optional 변경
// Required : 프로퍼티 필수로 변경
import "./test01";

// eg) Readonly<T>
// 객체를 freeze 하고 싶을 때
import "./test02";

// eg) Readonly<T>
// Object.freeze 을 표현 할 수 있다.
// function freeze<T>(obj: T): Readonly<T>;
import "./test03";

// eg) Record<T>
import "./test04";

// eg) Pick<T>, Omit<T>
// 일부 프로퍼티만 선택
// 일부 프로퍼티만 제거

import "./test05";

// eg) Exclude<T,U>, Extract<T,U>, NonNullable<T>
// T에서 U를 제거 ( T - U )
// T에서 U만을 추출 ( T intersection? U )
// T에서 null,undefined 제거
import "./test06";

// eg) Parameters<T>, ConstructorParameters<T>, ReturnType<T>, InstanceType<T>
// 목적 : 타입을 각각
// 함수 params, 생성자 params, return params 으로 타입을 구성, 인스턴스 타입으로 구성
import "./test07";

// eg) ThisParameterType,OmitThisParameter, ThisType
// ⚠ 잘 모르겠어
import "./test08";
