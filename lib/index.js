const Domain = require("domain");

/**
 * tryAsync
 * Runs the input function into an async `try-catch` (using Node.js domains).
 *
 * @name tryAsync
 * @function
 * @param {Function} fn The function to run.
 * @param {Function} _catch The catch function.
 * @return {Domain} The `Domain` object.
 */
var tryAsync = module.exports = function (fn, _catch) {
    var d = Domain.create();
    d.on("error", _catch);
    d.run(fn);
    return d;
};

