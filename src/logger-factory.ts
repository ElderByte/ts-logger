

export class Logger {


}


export class LoggerFactory {

  public static getLogger(name: string): Logger {
    return new Logger();
  }

  public helloWorld(): string {
    return 'hello world from ts library';
  }
}
