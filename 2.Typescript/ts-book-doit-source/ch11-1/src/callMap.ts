const callMap = <T, U>(fn: (T) => U) => <S, T extends { map(fn) }>(b: T) => b.map(fn)
callMap(a => a + 1)([1])
//callMap(a => a + 1)(1)