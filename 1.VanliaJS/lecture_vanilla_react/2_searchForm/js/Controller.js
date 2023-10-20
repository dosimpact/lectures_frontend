import { Logger } from "./helpers.js";

export default class Controller {
  constructor(store, views) {
    this.logger = new Logger(Controller);
    this.logger.log();
    this.store = store;
  }
}
