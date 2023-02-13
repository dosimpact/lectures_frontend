{
  /**
   * Type Assertions 💩
   */

  // Point1. Type Assertions 은 되도록 피하자.
  // - 하지만, JS 호환성을 위해 필요하다.
  // - JS함수의 리턴값을 단언할 수 있다면, 타이핑을 할 수 있다.
  // - 컴파일단에서 컴파일오류를 스킵해주며, 런타임에 실제 다른 타입이 들어오게 되면 js처럼 오류가 날 수 있다.

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 타입 케스팅 1
  console.log((<string>result).length); // 타입 케스팅 2

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // 타입 단언  [optional ?.] 의 반대 경우 [ !. ]
  numbers.push(2); // 😱
  numbers!.push(2); // 😱

  const button = document.querySelector("class")!;
}
