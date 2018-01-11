import {Logger, LoggerFactory, LogLevel} from '../src/logger/index';
import {ConsoleLogAppender} from '../src/logger/appenders/index';
import {SimpleMessageFormatter} from '../src/logger/format/index';

/**
 * Dummy test
 */
describe("Logger test", () => {

  const logger = LoggerFactory.getLogger('default');

  beforeAll(() => {
    LoggerFactory.getDefaultConfiguration()
      .withMaxLevel(LogLevel.Trace)
      .withAppender(new ConsoleLogAppender())
      .withFormatter(new SimpleMessageFormatter())
  });

  it("LoggerFactory getLogger instantiable", () => {
    expect(LoggerFactory.getLogger('default')).toBeInstanceOf(Logger)
  })

  it("Logger error working", () => {
    expect(logger.error('hello world', new Error('hi there'))).toBe(undefined)
  })

  it("Logger info working", () => {
    expect(logger.info('hello world', new Error('hi there'))).toBe(undefined)
  })

  it("Logger debug working", () => {
    expect(logger.debug('hello world', new Error('hi there'))).toBe(undefined)
  })

  it("Logger trace working", () => {
    expect(logger.trace('hello world', new Error('hi there'))).toBe(undefined)
  })

  it("Logger warn working", () => {
    expect(logger.warn('hello world', new Error('hi there'))).toBe(undefined)
  })

  it("Logger object working", () => {
    expect(logger.warn({test: 'hi there'})).toBe(undefined)
  })

  it("Logger null working", () => {
    expect(logger.warn(null)).toBe(undefined)
  })
})
