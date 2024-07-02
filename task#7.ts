
/* TASK # 07

Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number
after a delay of 1 second.*/

function squarenumber(num:number):Promise<number>{
return new Promise((resolve)=>{
console.log("Resolving the square of number......");
setTimeout(()=>{
resolve(num**2)
},1000);
}

)}

squarenumber(2).then((num)=>console.log("Square of number is : ",num));