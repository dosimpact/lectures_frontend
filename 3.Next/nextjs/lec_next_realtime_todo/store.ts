import { atom, selector } from "recoil";

// todo filtering state
export const todoState = atom<boolean>({
  key: "todoState",
  default: false,
});

export const doFilteringState = selector({
  key: "todoFilter",
  get: ({ get }) => {
    const res = get(todoState);
    return res;
  },
});

// counter example
export const counterState = atom<number>({
  key: "counterState",
  default: 0,
});

export const newCounterVal = selector({
  key: "counterX10",
  get: ({ get }) => {
    const counter = get(counterState);
    console.log(counter);

    return counter * 10;
  },
});
