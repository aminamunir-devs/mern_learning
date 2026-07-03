// Functions

// Create a function that prints your name.
function greet()
{
    console.log("hello amina");
}
greet();

console.log("-------------------------------------------------------------")

// Create a function that adds two numbers.
let add=function(a,b)
{
    return a+b;
}
let result=add(2,7);
console.log("add: ",result);

console.log("-------------------------------------------------------------")

// Create an arrow function that multiplies two numbers.
let mul=(x,y)=>
{
    return x*y;
}
let answer=mul(2,4);
console.log("multiply: ",answer)

console.log("-------------------------------------------------------------")

// Create a function with a default parameter.
let sub=(name="science")=>
{
    console.log("you choose the ",name)
}

sub();
sub("english");
sub("cs");

console.log("-------------------------------------------------------------")