import { info, warning } from "@actions/core";

export class LoggerService {
  warn(message: string): void {
    warning(message);
  }

  info(message: string): void {
    info(message);
  }
}
