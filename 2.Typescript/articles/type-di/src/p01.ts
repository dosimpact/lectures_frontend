class MySQLDataBaseService {
  connect(): void {
    console.log("✔️ DataBaseService Connected");
  }
}

class ServerModule {
  private dbService!: MySQLDataBaseService;
  constructor() {
    this.dbService = new MySQLDataBaseService();
  }

  prepare() {
    this.dbService.connect();
  }
}

const serverModule = new ServerModule();
serverModule.prepare();
