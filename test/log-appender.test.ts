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
    expect(ieAppender.appendLog(LogLevel.Trace, 'pre','msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Debug, 'pre','msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Info, 'pre','msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Warn, 'pre','msg',[])).toBe(undefined)
  });

  it("ConsoleLogAppender.IE.appendLog", () => {
    expect(ieAppender.appendLog(LogLevel.Error, 'pre','msg', [new Error('te')])).toBe(undefined)
  });
});
