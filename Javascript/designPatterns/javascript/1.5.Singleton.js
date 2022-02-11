// 1.5 싱글톤 패턴
// ✅ 오로지 하나의 인스턴스만 존재함을 보장

const Database = (function () {
  let instance = null;
  function Database(url, dbName) {
    this.url = url;
    this.dbName = dbName;
  }
  function createDatabaseInstance() {
    return new Database();
  }
  function getDatabaseInstance() {
    if (instance === null) {
      instance = createDatabaseInstance();
    }
    return instance;
  }
  return { getDatabaseInstance };
})();

const db1 = Database.getDatabaseInstance();
// another side
const db2 = Database.getDatabaseInstance();
console.log(db1 === db2); // true
