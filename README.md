# try-async [![Support this project][donate-now]][paypal-donations]

Async try-catch like interface for Node.js.

## Installation

```sh
$ npm i try-async
```

## Example

```js
const tryAsync = require("try-async");

tryAsync(() => {
    setTimeout(() => {
        throw new Error("Nasty error thrown from async stuff.");
    }, 10);
}, (err) => {
    console.log("Something went wrong: " + err);
    // => Something went wrong: Error: Nasty error thrown from async stuff.
});
```

## Documentation

### `tryAsync(fn, _catch)`
Runs the input function into an async `try-catch` (using Node.js domains).

#### Params
- **Function** `fn`: The function to run.
- **Function** `_catch`: The catch function.

#### Return
- **Domain** The `Domain` object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

MIT © [Ionică Bizău][website]


[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
