function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

//  error TS2540: Cannot assign to 'name' because it is a read-only property.
const res = freeze({ name: "dodo" });
// res.name = "dr";
