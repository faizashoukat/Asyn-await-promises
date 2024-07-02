/* TASK # 03

 Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds
 */


function promiseresolve(){
let promise= new Promise((resolve)=>{
setTimeout(()=>{
resolve("Resolved!")
},3000)
});
return promise;
  
}
promiseresolve().then((res)=>console.log(res))
