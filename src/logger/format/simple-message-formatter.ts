import {MessageFormatter} from './message-formatter';
import {LogLevel} from '../logger-factory';

export class SimpleMessageFormatter implements MessageFormatter {

  public formatMessage(level: LogLevel, tag: string, timestamp: Date, message: string): string {
    return `${timestamp.toISOString()} [${LogLevel[level].toUpperCase()}] ${tag} - ${message}`;
  }

}
