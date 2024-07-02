/* TASK # 03

 Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds
 */
function promiseresolve() {
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Resolved!");
        }, 3000);
    });
    return promise;
}
promiseresolve().then(function (res) { return console.log(res); });
