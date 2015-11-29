const tryAsync = require("../lib");

tryAsync(() => {
    setTimeout(() => {
        throw new Error("Nasty error thrown from async stuff.");
    }, 10);
}, (err) => {
    console.log("Something went wrong: " + err);
    // => Something went wrong: Error: Nasty error thrown from async stuff.
});
