// Loops


// Print numbers from 1 to 10 using for.
for(let i=1; i<=10; i++)
{
    console.log(i);
}

console.log("-------------------------------------------------------------")

// Print numbers from 10 to 1 using while.
let i=10;
while(i>=1)
{
    console.log(i);
    i--;

}
console.log("-------------------------------------------------------------")

// Create an object and print its keys using for...in
const student = {
    name: "Amina",
    age: 20,
    city: "Lahore"
};
for(let key in student)
{
    console.log(key)
}

console.log("-------------------------------------------------------------")

// Question 6: Sum of numbers from 1 to 100
let sum=0;
for(let i=1;i<=100;i++)
{
    sum+=i;
}
console.log(sum);