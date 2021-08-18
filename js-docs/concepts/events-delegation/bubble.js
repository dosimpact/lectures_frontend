//eg) 이벤트 버블링
// bottom up 방향으로 전달된다.
// e.target : 이벤트의 근원지 노드
// e.currentTarget : 그래서 현재 어떤 노드냐고!

document.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log("버블링(전파): currentTarget ", e.currentTarget.className);
    console.log("버블링(근원): target ", e.target.className);
  });
});
