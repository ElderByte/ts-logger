import {LogLevel} from '../logger-factory';

export interface LogAppender {
  appendLog(level: LogLevel, tag: string, formattedMessage: string, ...args: any[]): void;
}
