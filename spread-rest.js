                   /*   Easy way to remember:

Spread = Expands (breaks one thing into many)
Rest = Collects (gathers many things into one) */

// Spread Operator (...)

// The Spread Operator expands an array, object, or string into individual elements.

/* 
Example 1: Array

Without Spread

const numbers = [10, 20, 30];

console.log(numbers);

Output

[10, 20, 30] 
*/

// With Spread

const num=[10,20,30];   
console.log(...num);    //output : 10 20 30

// The array is expanded into individual values.

// Example 2: Copy an Array

const arr1=[1,2,3];
const arr2=[...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

// Example 3: Merge Arrays

const frontend=["react","css"];
const backend=["nodejs","express"];
const fullstack=[...frontend, ...backend];
console.log(fullstack);

// Example 4: Add New Elements

const a=[2,3];
const newnum=[1, ...a ,4,5];
console.log(newnum);

                    //  Spread with Objects

const student = {
    name: "Amina",
    age: 23
};
const updatedstud={
    ...student,
    city:"lahore"
}
console.log(updatedstud)

// Override Object Properties

const students = {
    name: "Amina",
    age: 23
};
const updated={
    ...students,
    age:22
}
console.log(updated);

                    //   Rest Operator (...)

// The Rest Operator collects multiple values into one array.


// Example 1: Function Parameters

function sum(...numbers)
{
    console.log(numbers);
}
sum(10,20,30,30);

// Example 2: Sum All Numbers

function sum(...number)
{
    let total=0;
    for(let num of number)
    {
        total+=num;
    }
    return total;
}
console.log(sum(10,20,30));
console.log(sum(1,2,3));
console.log(sum(10,20,30,40));

// Rest in Array Destructuring

const marks = [10, 20, 30, 40, 50];
const [first,second, ...mark]=marks;
console.log(first);
console.log(second);
console.log(mark);

// Rest in Object Destructuring

const stud = {
    name: "Amina",
    age: 22,
    city: "Lahore",
    course: "MERN"
};
const {
    name,...details
}=stud;
console.log(name);
console.log(details);


/* Scenario 1: Copy an Array ⭐ (Spread)

Given:

const fruits = ["Apple", "Mango", "Orange"];

Create a copy called newFruits.

Then add "Banana" to the copied array.

Expected Output
Original: ["Apple","Mango","Orange"]

Copy: ["Apple","Mango","Orange","Banana"] */

const fruits = ["Apple", "Mango", "Orange"];
const newFruit=[...fruits];
newFruit.push("Banana");
console.log(`original: ${fruits}`);
console.log(`original: ${newFruit}`);