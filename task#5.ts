
  /* Question # 05

Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.*/

async function resolvepromise()
{
    await new Promise((resolve)=>{
    resolve("Promise Resolve");
})
    .then((result)=>console.log(result))
}
resolvepromise();