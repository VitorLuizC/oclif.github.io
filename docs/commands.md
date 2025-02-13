---
title: Commands
---

A basic command looks like the following in TypeScript:

```js
import Command from '@oclif/core'

export class MyCommand extends Command {
  static description = 'description of this example command'

  async run() {
    console.log('running my command')
  }
}
```

The only part that is required is the run function. Accept user input with [arguments](args.md) and [flags](flags.md).

In JavaScript:

```js
const {Command} = require('@oclif/core')

class MyCommand extends Command {
  async run() {
    console.log('running my command')
  }
}

MyCommand.description = 'description of this example command'

module.exports = MyCommand
```

Note that the following examples will be in TypeScript. As JavaScript does not yet have static class properties, you will have to add them to the class after it is declared like we did with the description above.

### Other Command Options

[See the base class to get an idea of what methods can be called on a command](https://github.com/oclif/core/blob/main/src/command.ts).

```js
import Command, {flags} from '@oclif/core'

export class MyCommand extends Command {
  static description = `
description of my command
can be multiline
`

  // hide the command from help
  static hidden = false

  // custom usage string for help
  // this overrides the default usage
  static usage = 'mycommand --myflag'

  // examples to add to help
  // each can be multiline
  static examples = [
    '$ mycommand --force',
    '$ mycommand --help',
  ]

  // this makes the parser not fail when it receives invalid arguments
  // defaults to true
  // set it to false if you need to accept variable arguments
  static strict = false

  async run() {
    // show a warning
    this.warn('uh oh!')
    // exit with an error message
    this.error('uh oh!!!')
    // exit with status code
    this.exit(1)
  }
}
```

## Command Methods

<AUTOGENERATED_TABLE_OF_CONTENTS>

The following assumes you are in the `run()` method of an oclif [command](commands.md).

### `this.log(message: string)`

Output message to stdout (non-blocking). `console.log()` works fine too, but that is a blocking call. This uses [util.format()](https://nodejs.org/api/util.html#util_util_format_format_args) which behaves the same as `console.log()`.

```typescript
this.log('hello, world!')
```

### `this.warn(message: string | Error)`

Display an error or message as a warning

```typescript
this.warn('uh oh!')
this.warn(new Error('uh oh!'))
```

### `this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})`

Display error and exit. Also add a code to error object or exit status.

```typescript
this.error('uh oh!', {exit: 2})
this.error(new Error('uh oh!'))
```

The options object has the following options:
* `exit` — exit code to use
* `code` — a unique error code for the type of error
* `suggestions` —  an array of suggestions for a user to try next that may be useful or provide additional context
* `ref` — a url to documentation related to this error or fixing it

The `message`, `code`, `suggestions`, `ref` properties will be displayed when an error is shown. Reusable `Error` classes can be created that display the optional outputs above by implementing the `PrettyPrintableError` interface from @oclif/errors and `this.error` will handle them appropriately.

Note: You may need to install the latest `@oclif/core` and `@oclif/errors` for `code`, `suggestions` and `ref` to be displayed.

These errors are friendly and won't show a traceback unless debugging is enabled with `DEBUG=*` or `CLI_NAME_DEBUG=1`. If you want to raise errors like this outside of a command, use `@oclif/errors`.

```typescript
import {CLIError} from '@oclif/errors'

throw new CLIError('my friendly error')
```

Any error caught by the command of this `CLIError` type will be shown without traceback.

### `this.exit(code: number = 0)`

Exit process. Defaults to status 0.

```typescript
this.exit()
this.exit(1)
```

