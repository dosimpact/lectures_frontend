//
export const handleInput = (e) => {
  // const input = e?.target?.value;
  return filterInput(parseInput(e));
};

export const parseInput = (str) => {
  const splitInput = (str) =>
    String(str)
      .trim()
      .split(/[\n\,]/g);

  const autoFix = (words) => [
    ...new Set(
      words?.map((word) => word?.replace(/[\s\b]/g, "").toLowerCase())
    ),
  ];

  return autoFix(splitInput(str));
};
export const filterInput = (keywords) => {
  const badKeywordsFilter = (keywords) => {
    const reg = /[\"\'\,]/g;
    return keywords?.filter((w) => reg.test(w) || w === "");
  };
  //   const availableKeywords = () => {};
  const filteredKeywordSet = new Set(badKeywordsFilter(keywords));
  const availableKeywords = keywords?.filter((w) => !filteredKeywordSet.has(w));
  return [availableKeywords, [...filteredKeywordSet]];
};
// 1. , 개행 으로 사용자의 입력을 분리
// 2. 공백 문자,소문자 변환 파싱, 중복키워드 제거, 이는 autofix 부분이다.
// 3. 특수문자는 등록할 수 없음 , 이는 애러를 주어야 한다.
//  - badKeywords 로 분리를 해야 한다.

// console.log(parseInput("index.js,Hello World"));
// console.log(filterInput(parseInput("index.js,Hello World,'apple Pencil;'")));
