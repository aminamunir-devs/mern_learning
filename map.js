// What is map()?

// map() is an array method that loops through every element and returns a new array.

// It does not change the original array (unless you modify objects intentionally).

const num=[1,2,3]
const res=num.map((x)=>
{
    return x*2;
})
console.log(res);

// 1. item

const fruit=["apple,banana,mango"];
const uper=fruit.map(y=>y.toUpperCase());
console.log(uper);

// 2. index

const name=["amina","maham","ayesha"];
name.map((x,index)=>
{
    console.log(`${index} - ${x}`)
})

// Does map() change the original array?

// No.

const num1=[1,2,3]
let res1=num1.map((x=>x*2));
console.log(`original ${num1}`);
console.log(`new ${res1}`);

// Add 5 to every number.

// const numbers = [10,20,30,40];

// Expected Output

// [15,25,35,45]

const numbers = [10,20,30,40];
let add=numbers.map(x=>
{
    return x+5
}
)
console.log(add);

// const students = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:21},
//     {name:"Ahmed", age:22},
//     {name:"Amina", age:19}
// ];

// Expected Output

// ["Ali","Sara","Ahmed","Amina"]


const students = [
    {name:"Ali", age:20},
    {name:"Sara", age:21},
    {name:"Ahmed", age:22},
    {name:"Amina", age:19}
];

const name1=students.map((stud)=>
{
    return stud.name
})
console.log(name1);


// add a 10% bonus to every salary.

// const employees = [
//     {name:"Ali", salary:50000},
//     {name:"Sara", salary:60000},
//     {name:"Ahmed", salary:45000}
// ];

// Expected Output

// [
//     {name:"Ali", salary:55000},
//     {name:"Sara", salary:66000},
//     {name:"Ahmed", salary:49500}
// ]

// 💡 Hint: Return a new object using the spread operator.

const employees = [
    {name:"Ali", salary:50000},
    {name:"Sara", salary:60000},
    {name:"Ahmed", salary:45000}
];

let bonus=employees.map((a)=>
{return {
    name:a.name,
   salary:a.salary+(a.salary*10/100)
   
}
}
)
console.log(bonus);