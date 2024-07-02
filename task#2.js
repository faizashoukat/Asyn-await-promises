/* Question: 2

Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback
 after 1 second */
function greeting(callback) {
    setTimeout(function () {
        callback();
    }, 2000);
}
greeting(function () { return console.log("Hello World!"); });
