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

      const prefix = this.formatMessagePrefix(level, this.tag, new Date());

      this.config.appender.appendLog(level, prefix, message, additional);
    }
  }

  private formatMessagePrefix(level: LogLevel, tag: string, timestamp: Date): string {
    if(this.config.formatter){
      return this.config.formatter.formatMessagePrefix(level, tag, timestamp);
    }else{
      throw new Error('No log message formatter is configured!');
    }
  }
}

