// Step 5: What is a Promise?

// A Promise is simply:

// A promise that JavaScript will give you a result in the future.

// Not now.

// Later.

const promise=new Promise((resolve,reject)=>
{

})

// Success Example

const promise1=new Promise((resolve ,reject)=>
{
      resolve("messaged delivered");
})
promise1.then((mess)=>
{
    console.log(mess);
})

// Failure Example

const promise2=new Promise((resolve ,reject)=>
{
      reject("pizza canceeled");
})
promise2
.then((mess)=>
{
    console.log(mess);
})
.catch((mess)=>
{
    console.log(mess);
})


// Example

const marks=80;
const res=new Promise((resolve,reject)=>
{
    if(marks>=50)
    {
        resolve("you passed");

    }
    else{
        reject("you failed")
    }
})
res
.then((mess)=>
{
    console.log(mess)
})
.catch((mess)=>{
    console.log(mess)
})
