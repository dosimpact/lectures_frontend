// (1) 초과 프로퍼티 피하기 - as

interface Person1 {
  SSN: string;
  age?: number;
  name?: string;
}

const createPerson = (p: Person1) => {
  return { SSN: p.SSN };
};
// SSN을 만족한 객체지만, 다른 called 프로퍼티 때문에 오류 -> as 단언
console.log(createPerson({ SSN: "000000", called: 10 } as Person1));

// (2) 초과 프로퍼티 피하기 - 문자열 인덱스 서명

interface Person2 {
  SSN: string;
  age?: number;
  name?: string;
  [args: string]: any; // 문자열 인덱스 서명 꼴
}
const createPerson2 = (p: Person2) => {
  return { SSN: p.SSN };
};
// SSN을 만족한 객체지만, 다른 called 프로퍼티 때문에 오류 -> as 단언
console.log(createPerson2({ SSN: "000001", called: "10" }));

// (3) 초과 프로퍼티 피하기 - 다른 객체 삽입
const tmpObj = { SSN: "000002", called: 10 };
console.log(createPerson(tmpObj));
