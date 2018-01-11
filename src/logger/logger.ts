import {LoggerConfiguration, LogLevel} from './logger-factory';


export class Logger {

  /***************************************************************************
   *                                                                         *
   * Constructors                                                            *
   *                                                                         *
   **************************************************************************/

  constructor(
    private readonly tag: string,
    private readonly config: LoggerConfiguration
    ) { }

  /***************************************************************************
   *                                                                         *
   * Public API                                                              *
   *                                                                         *
   **************************************************************************/

  public trace(message: any, ...additional: any[]): void {
    this.log(LogLevel.Trace, message, additional);
  }

  public debug(message: any, ...additional: any[]): void {
    this.log(LogLevel.Debug, message, additional);
  }

  public info(message: any, ...additional: any[]): void {
    this.log(LogLevel.Info, message, additional);
  }

  public warn(message: any, ...additional: any[]): void {
    this.log(LogLevel.Warn, message, additional);
  }

  public error(message: any, ...additional: any[]): void {
    this.log(LogLevel.Error, message, additional);
  }

  public log(level: LogLevel, message: any, ...additional: any[]) {
    if(level < this.config.maxLevel) return;

    if (!message) {
      return;
    }

    this.logInternal(level, message, additional);
  }

  /***************************************************************************
   *                                                                         *
   * Private methods                                                         *
   *                                                                         *
   **************************************************************************/

  private logInternal(level: LogLevel, message: any, ...additional: any[]) {

    if (typeof message === 'object') {
      try {
        message = JSON.stringify(message, null, 2);
      } catch (e) {
        additional = [message, ...additional];
        message = 'circular object in message. ';
      }
    }
    const formated = this.formatMessage(level, this.tag, new Date(), message);
    this.appendLog(level, formated, additional);
  }

  private appendLog(level: LogLevel, formatedMessage: string, ...additional: any[]){
    this.config.appender.appendLog(level, this.tag, formatedMessage, additional);
  }


  private formatMessage(level: LogLevel, tag: string, timestamp: Date, message: string) {
    // TODO Support custom formatters
    return `${timestamp.toISOString()} [${LogLevel[level].toUpperCase()}] ${tag} - ${message}`;
  }
}
