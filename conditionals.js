// Conditionals

// Check if a person can vote.
let age=17;
if(age>=18)
{
    console.log("person can vote")
}
else
{
    console.log("person cannot vote")
}

console.log("-------------------------------------------------------------")

// Check if a number is positive or negative.
let num=5;
if(num>=0)
{
    console.log("number is positive")
}
else
{
    console.log("number is negative")
}
console.log("-------------------------------------------------------------")

// Create a grading system using if...else if.
let marks=70;
if(marks>=90)
{
    console.log("you got grade 'A'")
}
else if(marks>=80)
{
    console.log("you got grade 'B'")
}
else if(marks>=70)
{
    console.log("you got grade 'C'")
}
else{
    console.log("you are fail")
}

console.log("-------------------------------------------------------------")

/* Question 3: Largest Number

Find the largest among:

10, 25, 8

using if...else.
 */

let n=10;
let m=25;
let k=8;
if(n>=m && n>=k)
{
    console.log(`${n} is gratest`);
}
else if(m>=n && m>=k)
{
    console.log(`${m} is gratest`);
}
else{
    console.log(`${k} is gratest`);
}

console.log("-------------------------------------------------------------")