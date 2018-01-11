import {LogLevel} from '../logger-factory';

export interface MessageFormatter {
  formatMessage(level: LogLevel, tag: string, timestamp: Date, message: string): string;
}
