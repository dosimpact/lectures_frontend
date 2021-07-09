const TEMPLATE = '<input type="text">';

class SearchInput {
  searchTimer = null;
  // searchInput 관련 컴포넌트를 생성 후 , #App 태그에 append 해준다.
  constructor({ $target, onSearch, onRandomSearch }) {
    // input 태그를 만들고, ref를 만듦, 그리고 속성 설정
    const $searchInput = document.createElement("input");
    const $searchResult = document.createElement("div");
    const $recentSearch = document.createElement("section");
    const $searchRandomInput = document.createElement("button");

    this.$searchInput = $searchInput;
    this.$searchResult = $searchResult;
    this.$recentSearch = $recentSearch;
    this.$searchRandomInput = $searchRandomInput;

    $searchInput.className = "SearchInput";
    $searchResult.className = "searchResult";
    $recentSearch.className = "recentSearch";
    $searchRandomInput.className = "searchRandomInput";

    $target.appendChild($searchInput);
    $target.appendChild($searchResult);
    $target.appendChild($recentSearch);
    $target.appendChild($searchRandomInput);

    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.focus();

    this.recentSearchs = [];

    $searchInput.addEventListener("keyup", (e) => {
      console.log("key up");
      if (e.keyCode === 13 && e.target.value) {
        // 키코드 13 - 엔터

        if (this.searchTimer) clearInterval(this.searchTimer);

        this.searchTimer = setTimeout(() => {
          onSearch(e.target.value);
          this.recentSearchs.push(e.target.value);
          if (this.recentSearchs.length >= 6) {
            this.recentSearchs.splice(0, 1);
          }
          this.render();
        }, 200);
      }
    });

    $searchInput.addEventListener("click", (e) => {
      if (e.target.value) {
        e.target.value = "";
      }
    });

    $searchRandomInput.innerText = "랜덤냥이";
    $searchRandomInput.addEventListener("click", (e) => {
      onRandomSearch();
    });

    console.log("SearchInput created.", this);
  }

  setResultState(resultState) {
    this.resultState = resultState;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = `${this.resultState}`;
    this.$recentSearch.innerHTML = this.recentSearchs
      .map((term) => {
        return `
      <span class="recentSearch">
        ${term}
      </span>
      `;
      })
      .join("");
  }
}
