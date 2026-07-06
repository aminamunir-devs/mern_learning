// What is forEach()?

// forEach() is an array method that executes a function once for every element in the array.

// Think of it like this:

// "Go through every item in the array and do something with it."

arr=["apple","mango","banana"];
arr.forEach((fruits)=>
{
    console.log(fruits);
})

// 2. index

let color=["red","blue","green"];
color.forEach((col,index)=>
{
    console.log(`color is ${col} and index is ${index}`)
})
 
// Does forEach return anything?

// No.


let num=[1,2,3,4];
const result=num.forEach(num=>num*2);
console.log(result);


// Question 1 ⭐

// Find the total sum.

// const numbers = [5, 10, 15, 20];

// Expected Output

// Total = 50

const numbers = [5, 10, 15, 20];
let total=0;
numbers.forEach((num)=>
{
    total+=num; 
}
)
   console.log(total);

//    const products = [
//     { name: "Laptop", price: 900 },
//     { name: "Phone", price: 600 },
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 100 }
// ];

// Print:

// Laptop costs $900
// Phone costs $600
// Mouse costs $50
// Keyboard costs $100

const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

products.forEach((product)=>
{
    console.log(`${product.name} costs ${product.price}`)
})