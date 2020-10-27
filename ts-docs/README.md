
# TS 공식 문서를 정리하는 공간 입니다.



# TypeScript for JavaScript Programmers

[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types)

```ts
// 인터페이스를 지정해준다. params, variable type에 호환이 가능
interface IUser {
    name: string;
    id: number;
}

class UserAccount {
    // 맴버 변수 선언하기.
    name: string; id: number;

    // 생성자 호출!
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    // public은 생략가능
    public sayMyName(): void {
        console.log("my name is : ", this.name);
    }
    // interface로 type 검사
    sayWeName(you: IUser): IUser {
        console.log("we talk : ", this.name, " with ", you.name);
        return you;
    }
}

function printUser(user: IUser) {
    console.log(user.id + " => " + user.name);
}

const dodo: IUser = {
    name: "doyung",
    id: 25
}
/** class 타입으로 받으면, class내부에 선언된 모든 타입을 사용할 수 있다.
 * 하지만 IUser 타입으로 받으면 좁은 스코프의 변수만 사용 가느하다.
 */
const dodo2: UserAccount = new UserAccount("dodo2", 1);

console.log(dodo);  //{ name: 'doyung', id: 25 }
console.log(dodo2); //UserAccount { name: 'dodo2', id: 1 }
printUser(dodo);    //
printUser(dodo2);   //1 => dodo2
dodo2.sayMyName();      //my name is :  dodo2
dodo2.sayWeName(dodo);  //we talk :  dodo2  with  doyung     
// dodo2.sayMyName();



// union의 타입 지정.

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

// union으로 선언한 params 받기 1
function getLength(obj: string | string[]) {
    return obj.length;
}

// union으로 선언한 params 받기 2
function StateChanger(s: WindowStates): WindowStates {
    if (s === "closed") {
        s = "open"
    } else {
        s = "closed"
    }
    if (typeof s === "string") {
        console.log("State changed!");
    }
    return s;
}
console.log(getLength("fiveL"));                    // 5
console.log(getLength(["one", "two", "three"]));    // 3

let s: WindowStates = 'closed';
s = StateChanger(s); console.log(s);                //open
s = StateChanger(s); console.log(s);                //closed

// union으로 선언한 params 받기 3 - 리턴 일치성
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
        //          ^ = (parameter) obj: string
    } else {
        return obj;
    }
}
console.log(wrapInArray("string"));             //[ 'string' ]
console.log(wrapInArray(["string", "number"])); //[ 'string', 'number' ]
// console.log(wrapInArray([10, 20]));          // 타입 불가 인자string이므로 -> 리턴형은 반드시 string[] 임.


// Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


interface Backpack<T> {
    add: (obj: T) => void;
    get: () => T;
}

// TS 컴파일러한테 backpack이라는 변수가 있어라고 가정하는것. indext.d.ts 만들때 사용한다.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get(); // get하면 string으로 받을 수 있음

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23); // 애러 : string만 추가 가능


// Structural Type System

// Point 인터페이스틑 x,y 가 숫자임이 명확
interface Point {
    x: number;
    y: number;
}
// 함수도 Point 형태를 받는다.
function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// 실제 printPoint 에는 Point 가 아닌 일반 Object가 들어가도 된다. 구조만 맞으면 된다.
// TS에서 구조를 보는 Structural Type System 가 있기 때문이다.
const point = { x: 12, y: 26 };
printPoint(point); //prints "12, 26"

// Structural Type System - 일치하는 subset만 전달한다.
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"

// Structural Type System - 일치하지 않는 필드가 있으면 애러
const color = { hex: "#187ABF" };
// printPoint(color);


// Structural Type System - 클래스도 결국 object이고 이를 subset으로 따라간다. 
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
```