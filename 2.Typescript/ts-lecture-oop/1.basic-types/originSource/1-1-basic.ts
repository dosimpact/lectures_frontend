{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // point1. number|undefined vs number|null
  // - 보통은 전자를 사용한다, 데이터를 찾고 없으면 undefined를 반환한다.
  // - 사람이 의도적으로 null값을 마킹하는 경우라면 예외
  // - 컴퓨터(db 등)의 결과라면 undefined

  // point2. unknown vs any
  // - 둘다 가능하면 사용하지 않도록 한다.
  // unknown 타입은 ts의 최상위 타입이다.
  // - unknown 타입은 다른 타입으로 선언된 변수에 할당할 수 없습니다 ( any 타입을 제외 )
  // - unknown은 무조건 타입을 좁혀서 사용해야 한다.(의무)
  // - 반면, any는 타입을 좁혀서 사용하지 않아도 되서 자유롭다는 차이점

  // point3. void vs never
  // - 함수에서 리턴을 하되 빈값이면 void이다.
  // - 함수에서 리턴하지 않는 경우가 있다. 무한루프, 애러 던지는 경우

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
