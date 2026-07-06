        /*  What is Destructuring?

Destructuring means unpacking values from an array or object into separate variables. */

/* 
There are two types of destructuring
Object Destructuring
Array Destructuring 
*/

// 1. Object Destructuring

const student = {
    name: "Amina",
    age: 22,
    course: "MERN"
};
const {name,age,course}=student;
console.log(name);
console.log(age);
console.log(course);   // Variable names must match

// Renaming Variables

const person = {
    name: "Amina",
    age: 22
};

const {name:fullname}=person;
console.log(fullname);

// Default Values

const students = {
    names: "Amina"
};
const {names,city="lahore"}=students;
console.log(name);
console.log(city);

// 2. Array Destructuring

/* Arrays don't use property names.
They use positions (indexes). */

// With destructuring

const color=["red","blue","green"];
const [first,second,third]=color;
console.log(first);
console.log(second);
console.log(third);

// Skip Values

const numbers=[10,20,30,40];
const [firsts, ,thirds]=numbers;
console.log(firsts);
console.log(thirds);

// Default Values in Arrays

const num=[10];
const [a,b=20]=num;
console.log(a);
console.log(b);

// Nested Object Destructuring

const stud={
    nam:"amina",
    addres:{
        cityy:"lahore",
        country:"pakistan"
    }
};
const {addres:{cityy,country}}=stud;
console.log(cityy);
console.log(country);

// Nested Array Destructuring

const nums=[10,[20,30]];
const [m,[n,c]]=nums;
console.log(m);
console.log(n);
console.log(c);

            //  Destructuring Function Parameters

        
/* 
Without destructuring

function display(student) {
    console.log(student.name);
    console.log(student.age);
}

display({
    name: "Amina",
    age: 22
});
 */

// With destructuring

const display=({name,age})=>
{
    console.log(name);
    console.log(age);
}
display(
    {
        name:"amina",
        age:22
    }
)


/* Scenario 1: Student Information ⭐ (Object Destructuring)

Given:

const student = {
    name: "Amina",
    age: 22,
    course: "MERN"
};
Task

Extract:

name
age
course
Expected Output
Name: Amina

Age: 22

Course: MERN
 */

const student1 = {
    name1: "Amina",
    age1: 22,
    course1: "MERN"
};
const {name1,age1,course1}=student1
console.log(`Name:${name1}`)
console.log(`Age:${age1}`)
console.log(`Course:${course1}`)

/* Scenario 2: Employee Details ⭐

Given

const employee = {
    id: 101,
    name: "Ali",
    department: "IT",
    salary: 80000
};

Extract only

name
salary */

const employee = {
    id: 101,
    name2: "Ali",
    department: "IT",
    salary: 80000
};

const {name2,salary}=employee;
console.log(name2);
console.log(salary);
