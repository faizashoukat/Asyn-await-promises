  
 /* Question #4
Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their
 results as an array.*/

let promise1:Promise<string>=new Promise((resolve)=>{

    setTimeout(()=>{
        console.log("promise 1 is Resolving....")
        resolve("promise 1 Resolved!");   
    },1000)
});

let promise2:Promise<string>=new Promise((resolve)=>
{
    setTimeout(()=>{
        console.log("Promise 2 is Resolving....")
        resolve("Promise 2 Resolved!");      
    },3000)
});

// getting resolved promises into array

async function resolvePromises():Promise<string[]>{

    let promise_1=await promise1;
    let promise_2=await promise2;
    let result=[promise_1,promise_2]
     console.log(result)
     return result;
}
resolvePromises();
       
