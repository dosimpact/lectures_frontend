# index

```ts
Partial<T>
Readonly<T>
Record<K,T>
Pick<T,K>
Omit<T,K>
Exclude<T,U>
Extract<T,U>
NonNullable<T>
Parameters<T>
ConstructorParameters<T>
ReturnType<T>
InstanceType<T>
Required<T>
ThisParameterType
OmitThisParameter
ThisType<T>
```

### Partial<T>

```ts
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
```

### Readonly<T>

```ts
interface TodoR {
  title: string;
}
// 프로퍼티를 readonly로 변경한다.
const todo: Readonly<TodoR> = {
  title: "Delete inactive users",
};

// 오류: 읽기 전용 프로퍼티에 재할당할 수 없음
// todo.title = "Hello";
```

```ts
// Object.freeze 의 선언
function freeze<T>(obj: T): Readonly<T>;
```

### Record<K,T>

```ts
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

// Record
// page의 문자리터럴을 key로
// pageInfo의 객체를 value로 매핑해준다.
const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};
```

### Pick<T,K>

### Omit<T,K>

### Exclude<T,U>

### Extract<T,U>

### NonNullable<T>

### Parameters<T>

### ConstructorParameters<T>

### ReturnType<T>

### InstanceType<T>

### Required<T>

### ThisParameterType

### OmitThisParameter

### ThisType<T>
