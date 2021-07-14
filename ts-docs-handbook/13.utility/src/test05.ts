// Pick
interface Todo5 {
  title: string;
  description: string;
  completed: boolean;
}

// 일부 프로피티만 선택한다.
type TodoPreview = Pick<Todo5, "title" | "completed">;

const todo5: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Omit
interface Todo6 {
  title: string;
  description: string;
  completed: boolean;
}

type Todo6Preview = Omit<Todo6, "description">;

const todo6: TodoPreview = {
  title: "Clean room",
  completed: false,
};
