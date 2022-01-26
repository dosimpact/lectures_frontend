//

class Subject {
  constructor() {
    this.observerList = [];
  }
  registerObserver(observer) {
    this.observerList.push(observer);
  }
  removeObserver(observer) {
    this.observerList = this.observerList.filter((o) => o !== observer);
  }
  notifyObserver(payload) {
    this.observerList.forEach((subscriber) => subscriber.update(payload));
  }
}

class Publisher extends Subject {
  publishArticle(data) {
    this.notifyObserver({ data, publishDay: new Date() });
  }
}

class Observer {
  constructor() {
    this.subject = new Subject();
  }
  update(payload) {
    console.log("something update! = payload", payload);
  }
}

class NumberDisplay extends Observer {
  update(payload) {
    this.display(payload);
  }
  display({ data, publishDay }) {
    console.log(`${publishDay}`, Number(data));
  }
}
class UpperCaseDisplay extends Observer {
  update(payload) {
    this.display(payload);
  }
  display({ data, publishDay }) {
    console.log(`${publishDay}`, String(data).toUpperCase());
  }
}
class LowerCaseDisplay extends Observer {
  update(payload) {
    this.display(payload);
  }
  display({ data, publishDay }) {
    console.log(`${publishDay}`, String(data).toLocaleLowerCase());
  }
}

const publisher = new Publisher();
const numberDisplay = new NumberDisplay();
const upperCaseDisplay = new UpperCaseDisplay();
const lowerCaseDisplay = new LowerCaseDisplay();

publisher.registerObserver(numberDisplay);
publisher.registerObserver(upperCaseDisplay);
publisher.registerObserver(lowerCaseDisplay);

publisher.publishArticle("notice: it is very important news");

publisher.removeObserver(numberDisplay);

publisher.publishArticle("re notice: it is very important news");
