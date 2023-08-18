import "reflect-metadata";
import { Service, Container, Inject } from "typedi";

interface DBService {
  connect(): string;
}

@Service()
class MySQLDataBaseService {
  connect(): string {
    return "✔️ MySQLDataBaseService Connected";
  }
}

@Service()
class RedisService {
  connect(): string {
    return "✔️ RedisService Connected";
  }
}

@Service()
class LoggingService {
  log(message: string): void {
    console.log("[LOG]", message);
  }
}

@Service()
class AppService {
  @Inject(() => MySQLDataBaseService)
  private readonly databaseService!: DBService;

  @Inject()
  private readonly loggingService!: LoggingService;

  prepare(): void {
    const data = this.databaseService.connect();
    this.loggingService.log(data);
  }
}

@Service()
class CacheService {
  @Inject(() => RedisService)
  private readonly databaseService!: DBService;

  @Inject()
  private readonly loggingService!: LoggingService;

  prepare(): void {
    const data = this.databaseService.connect();
    this.loggingService.log(data);
  }
}

const appService = Container.get(AppService);
const cacheService = Container.get(CacheService);

appService.prepare();
cacheService.prepare();
