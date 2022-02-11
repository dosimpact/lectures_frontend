interface TodoR {
  title: string;
}
// 프로퍼티를 readonly로 변경한다.
const todo: Readonly<TodoR> = {
  title: "Delete inactive users",
};

// 오류: 읽기 전용 프로퍼티에 재할당할 수 없음
// todo.title = "Hello";
