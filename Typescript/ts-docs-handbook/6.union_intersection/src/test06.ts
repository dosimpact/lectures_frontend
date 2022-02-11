interface IFruitsObj2 {
  apple: {
    name: string;
  };
  banana: {
    age: number;
  };
}

interface fruitsObjOne<T extends keyof IFruitsObj2> {
  name: Pick<IFruitsObj2, T>;
}

const s3: fruitsObjOne<"apple"> = {
  name: { apple: { name: "1" } },
};
