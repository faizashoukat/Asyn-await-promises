
/* Question # 01

Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".*/

async function Message(){
    await new Promise((resolve)=>{
    setTimeout(resolve,2000);
    })
        return "Hello World";
}
Message().then((result)=>console.log(result));