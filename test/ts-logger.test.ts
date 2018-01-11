import {Logger, LoggerFactory} from '../src/logger/index';

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("LoggerFactory getLogger instantiable", () => {
    expect(LoggerFactory.getLogger('default')).toBeInstanceOf(Logger)
  })
})
