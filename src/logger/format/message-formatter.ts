import {LogLevel} from '../logger-factory';

export interface MessageFormatter {

  formatMessagePrefix(level: LogLevel, tag: string, timestamp: Date): string;

}
