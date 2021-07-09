class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("section");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    // this.$imageInfo.onclick = "app.imageInfo.closeModal()"
    // this.$imageInfo.addEventListener("click",app.imageInfo.closeModal());
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    if (this.data.visible) {
      api.fetchCat(this.data.image["id"]).then(({ data }) => {
        console.log("fetch data from id", data);
        this.data = {
          ...this.data,
          image: {
            ...data,
          },
        };
        if (this.data.visible) this.render();
      });
    }

    this.render();
  }

  closeModal() {
    console.log("close modal");
    // console.log(this);
    // console.log(this.setState);
    this.$imageInfo.style.opacity = "0";
    setTimeout(() => {
      this.setState({
        ...this.data,
        visible: false,
      });
    }, 250);
  }
  render() {
    if (this.data.visible) {
      const { id, name, url, temperament, origin } = this.data.image;
      console.log("this.data.image", this.data.image);

      this.$imageInfo.innerHTML = `
          <article class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close" onclick="app.imageInfo.closeModal()" >x</div> 
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </article>`;
      //<div class="close" onclick="app.imageInfo.closeModal()" >x</div>
      this.$imageInfo.style.display = "block";
      this.$imageInfo.style.opacity = "1";
      // document.querySelector(".ImageInfo .close").addEventListener("click",this.closeModal)
      // document.querySelector
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          app.imageInfo.closeModal();
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
