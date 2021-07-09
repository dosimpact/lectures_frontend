// Parameters<T>
declare function f1(arg: { a: number; b: string }): void;
type Type0 = Parameters<() => string>; // []
type Type1 = Parameters<(s: string) => void>; // [string]
type Type2 = Parameters<<T>(arg: T) => T>; // [unknown]
type Type4 = Parameters<typeof f1>; // [{ a: number, b: string }]
type Type5 = Parameters<any>; // unknown[]
type Type6 = Parameters<never>; // never
// type Type7 = Parameters<string>;  // 오류
// type Type8 = Parameters<Function>;  // 오류

// ConstructorParameters<T>
// 생성자 함수 타입의 모든 매개변수 타입을 추출 ?
type CType0 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type CType1 = ConstructorParameters<FunctionConstructor>; // string[]
type CType2 = ConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]

// ReturnType<T>
// 함수 T의 리턴 타입으로 구성된 타입을 만듭니다.
declare function f1(): { a: number; b: string };
type RType0 = ReturnType<() => string>; // string
type RType1 = ReturnType<(s: string) => void>; // void
type RType2 = ReturnType<<T>() => T>; // {}
type RType3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type RType4 = ReturnType<typeof f1>; // { a: number, b: string }
type RType5 = ReturnType<any>; // any
type RType6 = ReturnType<never>; // any
// type RType7 = ReturnType<string>;  // 오류
// type RType8 = ReturnType<Function>;  // 오류

class C {
  x = 0;
  y = 0;
}
// eg) InstanceType<T>
// ⚠ ? 뭐가 다른거지 , 클래스 타입 vs 인스턴스 타입 ... ? prototype이 빠지는가?
// 생성자 함수 타입 T의 인스턴스 타입으로 구성된 타입을 만듭니다.
type TypeInst0 = InstanceType<typeof C>; // C
type TypeInst1 = InstanceType<any>; // any
type TypeInst2 = InstanceType<never>; // any
// type TypeInst3 = InstanceType<string>; // 오류
// type TypeInst4 = InstanceType<Function>; // 오류
