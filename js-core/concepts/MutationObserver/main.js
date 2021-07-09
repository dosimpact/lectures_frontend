var target = document.getElementById("zerocho-changeable");

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // MutationRecord { type: "childList"| "attributes" }
    console.log(mutation);
  });
});

var config = {
  attributes: true, //태그 속성 감지 (id,class,value 등)
  attributeOldValue: true || null, // 변경전 값도 보여줄까?
  attributeFilter: ["class", "id"], // class 및 id 변경만 감지할래,
  childList: true, // 자식 태그변경 감지
  subtree: true, // 자식태그까지도 변경여부 전파
  characterData: true, // 태그의 텍스트 테이터 변경 감지 ?
  // childList 랑 겹치기 때문에, childList를 false로 해야함(=>subtree감지포기)
  characterDataOldValue: true || null, // 변경전 값도 보여줄까? ?
}; // 감시할 내용 설정
observer.observe(target, config); // 감시할 대상 등록

document.getElementById("attributes").addEventListener("click", function () {
  target.setAttribute("class", "zerocho-newclass"); // 대상에 변경 발생
});

document.getElementById("childList").addEventListener("click", function () {
  target.innerText = "zerocho"; // 대상에 변경 발생
});

document
  .getElementById("subtreeChanger")
  .addEventListener("click", function () {
    target.innerHTML = "<h2>somesub</h2>"; // 대상에 변경 발생
  });
