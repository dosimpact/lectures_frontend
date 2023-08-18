// Exclude<T,U>
// T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성합니다.
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T,U>
// T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성합니다.
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void

// NonNullable<T>
// T에서 null 과 undefined를 제외한 타입을 구성합니다.
type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]
