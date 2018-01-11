import {LogAppender, ConsoleLogAppender} from './appenders/index';
import {Logger} from './logger';
import {MessageFormatter, SimpleMessageFormatter} from './format/index';

export enum LogLevel {
  Trace,
  Debug,
  Info,
  Warn,
  Error
}


export class LoggerConfiguration {

  public appender: LogAppender;
  public formatter: MessageFormatter;
  public maxLevel: LogLevel;

  constructor(){
    this.appender = new ConsoleLogAppender();
    this.formatter = new SimpleMessageFormatter();
    this.maxLevel = LogLevel.Info;
  }
}

export class LoggerFactory {

  /***************************************************************************
   *                                                                         *
   * Fields                                                                  *
   *                                                                         *
   **************************************************************************/

  private static readonly Default = new LoggerFactory(new LoggerConfiguration());

  private readonly loggers = new Map<string, Logger>();

  /***************************************************************************
   *                                                                         *
   * Constructor                                                             *
   *                                                                         *
   **************************************************************************/

  constructor(
    private readonly configuration: LoggerConfiguration){
  }

  /***************************************************************************
   *                                                                         *
   * Static API                                                              *
   *                                                                         *
   **************************************************************************/

  public static getLogger(name: string): Logger {
    return LoggerFactory.Default.getLogger(name);
  }

  /***************************************************************************
   *                                                                         *
   * Public API                                                              *
   *                                                                         *
   **************************************************************************/

  public getConfiguration(): LoggerConfiguration {
    return this.configuration;
  }

  public getLogger(name: string): Logger {
    let logger = this.loggers.get(name);
    if(!logger) {
      logger = new Logger(name, this.getConfiguration());
      this.loggers.set(name, logger);
    }
    return logger;
  }
}
