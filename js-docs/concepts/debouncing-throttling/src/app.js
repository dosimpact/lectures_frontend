import Sample from "./sample.js";
export default class App {
  constructor($target) {
    this.$target = $target;

    this.sample = new Sample($target);
  }

  render() {}
}
