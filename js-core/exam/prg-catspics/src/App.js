console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.darkMode = new DarkMode({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        this.searchInput.setResultState("loading...");
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data);
          this.searchInput.setResultState("");
          if (!data || data.length === 0) {
            this.searchInput.setResultState("검색 결과가 없습니다.ㅜㅜ");
          }
        });
      },
      onRandomSearch: () => {
        this.searchInput.setResultState("loading...");
        api.fetchCatsRandom().then(({ data }) => {
          this.setState(data);
          this.searchInput.setResultState("");
          if (!data || data.length === 0) {
            this.searchInput.setResultState("검색 결과가 없습니다.ㅜㅜ");
          }
        });
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
    // window.localStorage.setItem("search")
  }
}
