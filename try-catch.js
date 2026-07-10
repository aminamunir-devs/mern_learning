// Invalid JSON
// Question

// Convert this JSON into an object.

// const data = "{name:'Amina'}";

// Handle the error if JSON is invalid.


try{
    const data = "{name:'Amina'}";
    const data1=JSON.parse(data);
    console.log(data1)

}
catch(error){
    // console.log("invalid json")
      console.log(error.name)
         console.log(error.message)
}

// Divide by Zero

// Important: In JavaScript, dividing by zero does not throw an error automatically. It returns Infinity.

// So we'll treat it as our own error.

// Question
// let a = 20;
// let b = 0;

// If b is 0, throw an error.

try{
    let a = 20;
let b = 0;
if(b===0)
{
    throw new Error("you are dividing by 0 which is invalid")
}
console.log(a/b);
}
catch(error){
    console.log(error.name);
     console.log(error.message);
      console.log(error);
}

// Custom Validation
// Question

// If age is less than 18,

// show

// Not eligible

try{
    let age=16;
    
        if(age<18)
        {
            throw new Error("not Eligible")
        }
        console.log("you are Eligible");
    
}
catch(error)
{
    console.log(error);
}

// Login Form

// A user submits a login form.

// const email = "";
// const password = "12345";

// If the email is empty, show an error.

const name="amina";
const email="amina@gmail.com";
try{
    if(email==="")
    {
        throw new Error("email is required")
    }
    console.log(email);

}
catch(error)
{
    console.log(error);
}

// Bank Withdrawal

// A customer has ₹5000 (or Rs. 5000) in their account.

// They try to withdraw Rs. 7000.

let balance=9000;
const Withdrawal=7000;
try{
    if(Withdrawal>balance)
    {
        throw new Error("you dont have that much money");
    }
    balance-=Withdrawal
    console.log(`now you have this balance: ${balance}`);
}
catch(error)
{
    console.log(error);
}