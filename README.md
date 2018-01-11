
[![CI Status](https://travis-ci.org/ElderByte-/ts-logger.svg?branch=master)](https://travis-ci.org/ElderByte-/ts-logger)
[![npm version](https://badge.fury.io/js/%40elderbyte%2Fts-logger.svg)](https://badge.fury.io/js/%40elderbyte%2Fts-logger)


# TypeScript logger

A simple but highly customizable TypeScript logger, bundled with rollup in es5 format.
Works well with Angular 5 Apps and AOT compilation.


# Installation

Install via NPM: `npm i --save @elderbyte/ts-logger`

# Usage

```typescript
import {LoggerFactory} from '@elderbyte/ts-logger';

class MyClass {

  private logger = LoggerFactory.getLogger('MyClass');

  public myMethod(): void {
    this.logger.info('You invoked myMethod!');
  }
}

```

Will result in a log like:

> 2018-01-11T14:28:49.401Z [DEBUG] MyClass  You invoked myMethod!

Browser which support coloring will also have different colors depending on the log level.

# Configuration

Configuration is provided with default values to support out of the box working logging expirience.

Each `LoggerFactory` instance can be configured independently. There is however a global, static default instance and its recommended to use this accross all your projects and libraries. This will allow to configure the logger on a central place (such as your main app).

You can configure the max log level, custom appenders and message formatter. All of these are optional.

```typescript
LoggerFactory.getDefaultConfiguration()
      .withMaxLevel(LogLevel.Trace) // Defaults to Info
      .withAppender(new ConsoleLogAppender()) // Same as default
      .withFormatter(new SimpleMessageFormatter()) // Same as default
```
