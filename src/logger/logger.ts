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
    this.log(LogLevel.Trace, message, ...additional);
  }

  public debug(message: any, ...additional: any[]): void {
    this.log(LogLevel.Debug, message, ...additional);
  }

  public info(message: any, ...additional: any[]): void {
    this.log(LogLevel.Info, message, ...additional);
  }

  public warn(message: any, ...additional: any[]): void {
    this.log(LogLevel.Warn, message, ...additional);
  }

  public error(message: any, ...additional: any[]): void {
    this.log(LogLevel.Error, message, ...additional);
  }

  public log(level: LogLevel, message: any, ...additional: any[]): void {
    if(level < this.config.maxLevel) return;
    if (!message) { return; }

    this.logInternal(level, message, additional);
  }

  /***************************************************************************
   *                                                                         *
   * Private methods                                                         *
   *                                                                         *
   **************************************************************************/

  private logInternal(level: LogLevel, message: any, additional: any[] = []): void {
    if (this.config.appender) {
      if (typeof message === 'object') {
        try {
          message = JSON.stringify(message, null, 2);
        } catch (e) {
          additional = [message, ...additional];
          message = 'circular object in message. ';
        }
      }
      const formatedMessage = this.formatMessage(level, this.tag, new Date(), message);
      this.config.appender.appendLog(level, formatedMessage, additional);
    }
  }

  private formatMessage(level: LogLevel, tag: string, timestamp: Date, message: string): string {
    if(this.config.formatter){
      return this.config.formatter.formatMessage(level, tag, timestamp, message);
    }else{
      throw new Error('No log message formatter is configured!');
    }
  }
}

