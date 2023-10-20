import { emit, on } from "../helpers.js";

export default class View {
  constructor(element) {
    if (!element) throw "element need";
    this.element = element;
    this.originalDisplay = this.element.style.display || "";
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, detail) {
    emit(this.element, eventName, detail);
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }
}
