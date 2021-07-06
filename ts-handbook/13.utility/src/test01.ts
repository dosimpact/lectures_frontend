// todo 정의
interface Todo {
  title: string;
  description: string;
}

// Partial 타입으로 일부만 가져 온다.
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// tests
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//Required<T>
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // 성공

const obj2: Required<Props> = { a: 5, b: "23" }; // 반드시 필요
