export default class Sample {
  constructor($target) {
    this.$target = $target;
    console.log("smaple");

    this.$sample = document.createElement("section");

    this.$sample01 = document.createElement("article");
    this.$sample02 = document.createElement("article");

    this.$sample.appendChild(this.$sample01);
    this.$sample.appendChild(this.$sample02);
    this.$target.appendChild(this.$sample);

    this.$sample01.innerHTML = "sample01";
    this.$sample02.innerHTML = "sample02";

    // 디바운스 예제
    const input01 = document.createElement("input");
    this.timer01 = null;

    input01.addEventListener("input", (e) => {
      // 기존 이벤트 캔슬
      if (this.timer01) clearTimeout(this.timer01);

      this.timer01 = setTimeout(() => {
        console.log("input 디바운스 events", e.target.value);
        this.timer01 = null;
      }, 200);
    });
    this.$sample01.appendChild(input01);

    // 쓰로틀링 예제
    const input02 = document.createElement("input");
    this.timer02 = null;
    input02.addEventListener("input", (e) => {
      // 기존 타이머있으면 리턴
      if (this.timer02) return;

      this.timer02 = setTimeout(() => {
        console.log("input 쓰로틀링 events", e.target.value);
        this.timer02 = null;
      }, 200);
    });
    this.$sample02.appendChild(input02);
  }
}
