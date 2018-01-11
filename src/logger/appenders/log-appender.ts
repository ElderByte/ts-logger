import {LogLevel} from '../logger-factory';

export interface LogAppender {
  appendLog(level: LogLevel, messagePrefix: string, message: string, args: any[]): void;
}
