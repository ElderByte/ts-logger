import {LogLevel} from '../src/logger/index';
import {ConsoleLogAppender} from '../src/logger/appenders/index';

/**
 * ConsoleLogAppender Test
 */
describe("ConsoleLogAppender test", () => {

  const ieAppender = new ConsoleLogAppender(true);

  it("ConsoleLogAppender instantiable", () => {
    expect(new ConsoleLogAppender()).toBeInstanceOf(ConsoleLogAppender)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Trace, 'msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Debug, 'msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Info, 'msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Warn, 'msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Error, 'msg', [new Error('te')])).toBe(undefined)
  });
});
