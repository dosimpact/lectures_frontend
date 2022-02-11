// ✅ 모듈 노출 패턴(revealing module pattern)
// 출처: https://webclub.tistory.com/312 [Web Club]

// ✅ 비공개 함수를 공개 메서드로 노출시키는 방법

// ✅ 목적 : 비공개 메서드를 구현하면서 동시에, 원한다면 공개 매서드로도 노출 가능
// 그러면서 공개된 메서드는 외부로부터 보호받는다.

var myArray = (function () {
  var arrStr = "[object Array]";
  var toString = Object.prototype.toString;
  function isArray(a) {
    return toString.call(a) === arrStr;
  }
  function indexOf(haystack, needle) {
    var i = 0;
    var max = haystack.length;
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      }
    }
    return -1;
  }
  return {
    isArray: isArray,
    indexOf: indexOf,
    inArray: indexOf,
  };
})();

// ✅ 잘 잘동되는것을 확인
console.log(myArray.indexOf([1, "a", 2, 3], 2));
// ✅ 외부의 변형
myArray.indexOf = null;
// 그럼에도 indexOf 원본은 훼손되지 않는다.
console.log(myArray.inArray([1, "a", 2, 3], 2));
