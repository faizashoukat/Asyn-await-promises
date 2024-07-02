
/* Question # 08

 Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns
 an array of their results.*/

function Promises(str:string):Promise<string>{
    return new Promise((resolve)=>{

    resolve(`${str}`); 
});
}

async function Arrayofpromises(ArrayofPromises:Promise<string>[]):Promise<string[]>{
    let Allpromises=await Promise.all(ArrayofPromises);
    console.log(Allpromises);
    return Allpromises;
}

Arrayofpromises([Promises('Hello'),Promises('world')]);
