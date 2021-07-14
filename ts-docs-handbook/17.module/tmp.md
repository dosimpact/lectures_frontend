## named function, anonymous function

```ts
// 기명 함수
function add(x, y) {
  return x + y;
}
// 익명 함수
let myAdd = function (x, y) {
  return x + y;
};
```

## 함수의 타이핑 (Typing the function)

```ts
// eg) 익명함수와 네임드 함수의 타이핑
function add(x: number, y: number): number {
  return x + y;
}
let myAdd = function (x: number, y: number): number {
  return x + y;
};
// eg) 함수와, 함수 타입의 타이핑
//(x: number, y: number) => number
//(x: number, y: number):number
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

## 타입의 추론 (Inferring the types)

```ts
//eg) 방정식 한쪽에만 있어도, 타입추론 가능
// myAdd는 전체 함수 타입을 가집니다
let myAdd = function (x: number, y: number): number {
  return x + y;
};
// 매개변수 x 와 y는 number 타입을 가집니다
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
```

## Optional and Default Parameter

```ts
// eg) ? 선택적 매개 변수
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
let result1 = buildName("Bob"); // 지금은 바르게 동작
// let result2 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams"); // 정확함
```

```ts
// eg) 디폴트 매개 변수
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
let result1 = buildName("Bob"); // 올바르게 동작, "Bob Smith" 반환
let result2 = buildName("Bob", undefined); // 여전히 동작, 역시 "Bob Smith" 반환
// let result3 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result4 = buildName("Bob", "Adams"); // 정확함
```

```ts
// eg 선택적,디폴트 매개변수는 같은 타입을 가진다.
// function buildName2(firstName: string, lastName?: string): void
function buildName(firstName: string, lastName?: string) {
  // ...
}
function buildName2(firstName: string, lastName = "Smith") {
  // ...
}
```

```ts
// eg) 선택적,디폴트 매개변수가 앞에 있다면 생략 불가 , undefined로 넣기
function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}
// let result1 = buildName("Bob"); // 오류, 너무 적은 매개변수
// let result2 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams"); // 성공, "Bob Adams" 반환
let result4 = buildName(undefined, "Adams"); // 성공, "Will Adams" 반환
```

## 나머지 매개변수 (Rest Parameters)

```ts
//eg) ... 타입 , []로
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
```

## this와 화살표 함수 (this and arrow functions)

eg) arrow function capture

```ts
//eg) return function의 this는 window
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
```

eg) this 매개변수 (this parameter)

```ts
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  //✅ NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
  createCardPicker: function (this: Deck) {
    //✅ funtion 대신, arrow function을 리턴하여,
    // 'this'를 이곳에서 캡처할 수 있도록 합니다
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      //✅ function (this: Deck) 타이핑 덕분에, this.suits[pickedSuit] 가 string임을 알게 되었다.
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
```

## ⚠️ 콜백에서 this 매개변수 (this parameters in callbacks)

- 콜백함수에서 this를 안쓰는 경우

1. funtion 타이핑은 : onClickGood(this: void, e: Event) {...}
2. arrow fun 타이핑은 : (e: Event) => { this.info = e.message }

- 콜백함수에서 this를 쓰는 경우
  eg) 콜백함수에서 this를 안쓰는 경우 funtion 타이핑

```
interface UIElement {
addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
info: string = "";
// 🚀 this: void 로 변경 (UIElementd의 타입과 다름)
onClickBad(this: Handler , e: Event) {
// 이런, `this`가 여기서 쓰이는군요. 이 콜백을 쓰면 런타임에서 충돌을 일으키겠군요
this.info = e.type;
}
}
let h = new Handler();
let uiElement: UIElement = {
addClickListener: (cb) => {
cb(new Event("click"));
},
};
uiElement.addClickListener(h.onClickBad); // 오류!
```

```ts
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
  info: string = "";
  onClickBad(this: void, e: Event) {
    // 이런, `this`가 여기서 쓰이는군요. 이 콜백을 쓰면 런타임에서 충돌을 일으키겠군요
    // this.info = e.type;
  }
}
let h = new Handler();
let uiElement: UIElement = {
  addClickListener: (cb) => {
    cb(new Event("click"));
  },
};
uiElement.addClickListener(h.onClickBad); // 오류!
```

eg) 콜백함수에서 this를 안쓰는 경우 arrow funtion 타이핑

```ts
class Handler {
  info: string;
  onClickGood = (e: Event) => {
    this.info = e.message;
  };
}
```

## 오버로드

eg) 함수 오버로드 선언과 구현의 분리
? 구현부는 any로 해야하는건가?

```ts
let suits = ["hearts", "spades", "clubs", "diamonds"];
// 오버로드 선언부
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
// 실제 구현부
function pickCard(x: any): any {
  // 인자가 배열 또는 객체인지 확인
  // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // 그렇지 않다면 그냥 card를 선택합니다.
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)]; // 오버로딩 1
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15); // 오버로딩 2
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// let pickedCard3 = pickCard("15"); // 오버로딩 실패 No overload matches this call.
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```
