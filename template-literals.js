        //    Template Literals (Template Strings)


let name="amina";
let age=22;
console.log(`my name is ${name} ,I am ${age} year old`);

// 2. Expressions Inside ${}

const a=10;
const b=20;
console.log(`sum is = ${a+b}`)

// 3. Multi-line Strings

const mess=`I
LOVE
PAKISTAN`;
console.log(mess);

// Example: Student Details

const student = {
    name: "Amina",
    age: 22,
    course: "MERN"
};
console.log(`
    name:${student.name}
    age:${student.age}
    course:${student.course}`)

/* Scenario 1: Shopping Bill ⭐

Given

const item = "Laptop";
const price = 90000;
const quantity = 2;

Print

Item: Laptop

Price: 90000

Quantity: 2

Total: 180000

(Hint: Calculate the total inside ${}.) */

const item = "Laptop";
const price = 90000;
const quantity = 2;

console.log(
    `item:${item} 
     price:${price} 
     Quentity:${quantity} 
     Total:${quantity*price}`
)

/* Scenario 2: Calculator ⭐

Given

const a = 20;
const b = 10;

Print

20 + 10 = 30
20 - 10 = 10
20 × 10 = 200
20 ÷ 10 = 2 */

const x = 20;
const y = 10;x
console.log(`
    ${x}+${y}=${x+y}
    ${x}-${y}=${x-y}
    ${x}*${y}=${x*y}
    ${x}/${y}=${x/y}`)