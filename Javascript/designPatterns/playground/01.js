const DataBase = (function () {
  // -instance
  let instance = null;
  // -생성자 함수
  function DataBase(dbName, url) {
    this.dbName = dbName;
    this.url = url;
  }
  // -createInstance
  function createInstance() {
    return new DataBase("main", "url");
  }
  // -getInstance
  function getInstance() {
    if (instance === null) {
      instance = createInstance();
    }
    return instance;
  }
  return { getInstance };
})();

const inst1 = DataBase.getInstance();
const inst2 = DataBase.getInstance();

console.log(inst1);
console.log(inst1 === inst2);
