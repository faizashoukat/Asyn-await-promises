
/* Question #10

Write a TypeScript function that uses async/await to wait for a Promise to resolve and
 then returns a new Promise that resolves with the result multiplied by 2.*/

async function my_promise(promise:Promise<any>):Promise<number>{
    let result=await promise;
    return new Promise((resolve)=>resolve(result*2))
}

let new_promise=new Promise((resolve)=>resolve(10));
my_promise(new_promise).then((result)=>{
    console.log(result)
});



