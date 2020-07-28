export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(makePerson("jane", 24), makePerson("dos", 25));
}
