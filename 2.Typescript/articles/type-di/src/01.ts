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
  private databaseService: DataBaseService;
  private loggingService: LoggingService;

  constructor(
    @Inject() databaseService: DataBaseService,
    @Inject() loggingService: LoggingService
  ) {
    this.databaseService = databaseService;
    this.loggingService = loggingService;
  }

  prepare(): void {
    const data = this.databaseService.connect();
    this.loggingService.log(data);
  }
}

const appService = Container.get(AppService);
appService.prepare();
