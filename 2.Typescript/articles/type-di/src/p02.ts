interface DBService {
  connect(): void;
}

class MySQLDataBaseService implements DBService {
  connect(): void {
    console.log("✔️ DataBaseService Connected");
  }
}

class ServerModule {
  private dbService!: DBService;

  constructor(dbservice: DBService) {
    this.dbService = dbservice;
  }

  prepare() {
    this.dbService.connect();
  }
}

const appService = new ServerModule(new MySQLDataBaseService());
appService.prepare();
