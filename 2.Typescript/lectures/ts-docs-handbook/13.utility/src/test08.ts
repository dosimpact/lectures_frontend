// 1.This 관련된 타입

// 1.1 ThisParameterType
// 함수의 this 매개변수 타입
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// 1.2 OmitThisParameter
// 함수 타입에서 'this' 매개변수를 제거
function toHex2(this: Number) {
  return this.toString(16);
}

// `bind`의 반환 타입은 이미 `OmitThisParameter`을 사용하고 있습니다, 이는 단지 예제를 위한 것입니다.
const fiveToHex2: OmitThisParameter<typeof toHex2> = toHex2.bind(5);

console.log(fiveToHex2());

// 1.3 ThisType<T>
// --noImplicitThis 로 컴파일
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // 메서드 안의 'this 타입은 D & M 입니다.
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj08 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // 강하게 타입이 정해진 this
      this.y += dy; // 강하게 타입이 정해진 this
    },
  },
});

obj08.x = 10;
obj08.y = 20;
obj08.moveBy(5, 5);
