import {LogAppender} from './log-appender';
import {LogLevel} from '../logger-factory';

export class ConsoleLogAppender implements LogAppender{

  /***************************************************************************
   *                                                                         *
   * Fields                                                                  *
   *                                                                         *
   **************************************************************************/

  private readonly isIE: boolean;

  /***************************************************************************
   *                                                                         *
   * Constructor                                                             *
   *                                                                         *
   **************************************************************************/

  constructor(){
    this.isIE = navigator.appName == 'Microsoft Internet Explorer' ||
      !!(navigator.userAgent.match(/Trident/) ||
        navigator.userAgent.match(/rv:11/));
  }

  /***************************************************************************
   *                                                                         *
   * Public API                                                              *
   *                                                                         *
   **************************************************************************/

  public appendLog(level: LogLevel, tag: string, formattedMessage: string, ...args: any[]): void {
    this.log(level, tag, formattedMessage, args);
  }

  /***************************************************************************
   *                                                                         *
   * Private methods                                                         *
   *                                                                         *
   **************************************************************************/


  private log(level: LogLevel, tag: string, formattedMessage: string, additional: any[] = []) {


    // Coloring doesn't work in IE
    if (this.isIE) {
      return this.logIE(level, formattedMessage, additional);
    }

    const color = this.getColor(level);
    console.log(`%c${formattedMessage}`, `color:${color}`, ...additional);
  }

  private logIE(level: LogLevel, formattedMessage: string, additional: any[]) {
    switch (level) {
      case LogLevel.Warn:
        console.warn(formattedMessage, ...additional);
        break;
      case LogLevel.Error:
        console.error(formattedMessage, ...additional);
        break;
      case LogLevel.Info:
        console.info(formattedMessage, ...additional);
        break;
      default:
        console.log(formattedMessage, ...additional);
    }
  }

  private getColor(level: LogLevel): string {
    switch (level) {
      case LogLevel.Trace:
        return 'blue';
      case LogLevel.Debug:
        return 'teal';
      case LogLevel.Info:
        return 'gray';
      case LogLevel.Warn:
        return 'orange';
      case LogLevel.Error:
        return 'red';
      default:
        return 'black';
    }
  }

}
