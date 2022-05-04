import { environment } from 'src/environments/environment';

export class Logger {
  public static error(message: string): void {
    if (environment.logLevel > 0) {
      console.error(`:::LOGGER:::ERROR:: ${message}`);
    }
  }

  public static warn(message: string): void {
    if (environment.logLevel > 1) {
      console.warn(`:::LOGGER:::WARN:: ${message}`);
    }
  }

  public static info(message: string): void {
    if (environment.logLevel > 2) {
      console.log(`:::LOGGER:::INFO:: ${message}`);
    }
  }

  public static debug(message: string): void {
    if (environment.logLevel > 3) {
      console.log(`:::LOGGER:::DEBUG:: ${message}`);
    }
  }
}
