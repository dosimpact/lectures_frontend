import Person, { makePerson } from "./person/Person";
import IPerson from "./person/IPerson";

const testMakePerson = (): void => {
  let dos: IPerson = makePerson("dos");
  let dos_2: IPerson = new Person("dos2");
  console.log(dos, dos_2);
};

testMakePerson();
