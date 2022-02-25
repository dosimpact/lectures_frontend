const changeToDarkCSS = () => {
  document.documentElement.style.setProperty("--dark-bg-color", "black");
  document.documentElement.style.setProperty("--dark-color", "white");
};
const changeToLightCSS = () => {
  document.documentElement.style.setProperty("--dark-bg-color", "white");
  document.documentElement.style.setProperty("--dark-color", "dark");
};

class DarkMode {
  // darkMode 관련 컴포넌트를 생성 후 , #App 태그에 append 해준다.
  constructor({ $target }) {
    // input 태그를 만들고, ref를 만듦, 그리고 속성 설정
    const $darkMode = document.createElement("input");
    this.$darkMode = $darkMode;
    this.$darkMode.type = "checkbox";
    this.$darkMode.placeholder = "고양이를 검색해보세요.|";

    $darkMode.className = "darkMode";
    $target.appendChild($darkMode);

    // 다크 모드 초기값
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$darkMode.checked = true;
      changeToDarkCSS();
    } else {
      changeToLightCSS();
    }

    // 다크 모드 활성화/비활성화 토글
    $darkMode.addEventListener("change", (e) => {
      // console.log(e.target.checked);
      if (e.target.checked) {
        changeToDarkCSS();
      } else {
        changeToLightCSS();
      }
    });
  }
  render() {}
}
