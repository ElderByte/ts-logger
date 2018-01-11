import {MessageFormatter} from './message-formatter';
import {LogLevel} from '../logger-factory';

export class SimpleMessageFormatter implements MessageFormatter {

  public formatMessagePrefix(level: LogLevel, tag: string, timestamp: Date): string {
    return `${timestamp.toISOString()} [${LogLevel[level].toUpperCase()}] ${tag} `;
  }

}
