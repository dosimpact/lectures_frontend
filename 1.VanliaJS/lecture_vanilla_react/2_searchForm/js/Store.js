import { Logger } from "./helpers.js";

export default class Store {
  constructor(storage) {
    this.logger = new Logger(Store);
    this.logger.log();
    if (!storage) throw "storage need";
    this.storage = storage;
  }
}
