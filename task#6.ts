   
   /* Question # 06

Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console*/

   async function rejectpromise(){

   await new Promise((resolve,reject)=>{
   reject(new Error("something went wrong"));
})
   .catch((error)=>console.log(error));

/* if you want to console any statement about reject function instead of generate any error then you will have 
   to pass statement in console*/

}
   rejectpromise();