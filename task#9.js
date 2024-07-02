/*TASK # 09

Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.*/
function repeatfunc() {
    function callrepeat() {
        console.log("Hello Everyone!'Have a Nice day'");
        setTimeout(callrepeat, 2000);
    }
    callrepeat();
}
repeatfunc();
