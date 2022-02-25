import { Ball } from "./ball.js";
import { Block } from "./block.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10);
    this.block = new Block(500, 100, 200, 350);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }
  animate(t) {
    // ⚠ this 의 문맥이란 무엇인가?
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

// 1 Render Tree 형성 완료
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

// 2 리소스(사진,등) 까지 로딩 완료
window.addEventListener("load", () => {
  console.log("load");
});

window.onload = () => {
  new App();
};
