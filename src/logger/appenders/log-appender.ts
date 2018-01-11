import {LogLevel} from '../logger-factory';

export interface LogAppender {
  appendLog(level: LogLevel, formattedMessage: string, args: any[]): void;
}
