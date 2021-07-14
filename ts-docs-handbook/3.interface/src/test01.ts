// - labeledObj는 실제 더 많은 값을 갖지만, 타입검사결과 서브타입만 사용
// - 요구하는 프로퍼티만 충족되는지 확인하기 때문

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
