// 교차 타입, 유니언 타입
// 목적 : 새로운 타입을 만들지 않고, 기존의 타입들을 결합

export function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
