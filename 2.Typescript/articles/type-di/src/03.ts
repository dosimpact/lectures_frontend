import "reflect-metadata";
import { Service, Container, Inject } from "typedi";

@Service()
class DataBaseService {
  connect(): string {
    return "✔️ DataBaseService Connected";
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
  @Inject()
  private readonly databaseService!: DataBaseService;

  @Inject()
  private readonly loggingService!: LoggingService;

  prepare(): void {
    const data = this.databaseService.connect();
    this.loggingService.log(data);
  }
}

const appService = Container.get(AppService);
appService.prepare();
