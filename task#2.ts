


/* Question: 2

Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback 
 after 1 second */

 function greeting(callback:()=>void)
 {
  setTimeout(()=>{
    callback()
  },1000);

 }
  greeting(()=>console.log("Hello World!"));