// Arrow Function
const greet=()=>
{
    console.log("hello amina")
}
greet();

// One Parameter
const square=num =>num *num;
console.log(square(5));

// Multiple Parameters
const add=(a,b)=>a+b;
console.log(add(2,7));

// Scenario 1: Array Mapping

const number=[1,2,3,4];
const double=number.map(num=>num*2);
console.log(double);

// Scenario 2: Filtering

const ages=[22,13,15,27,18,30];
const adult=ages.filter(age=>age>=18);
console.log(adult);

// Scenario 3: Finding One Item

const users=[
    {id:2,name:"amina"},
    {id:1,name:"maham"},
    {id:3,name:"ayesha"},
    {id:4,name:"diya"}
    
];
const user=users.find(u=>u.id===3);
console.log(user)

/* Scenario 1: Check Even or Odd ⭐

Accept one number.

Print

Even

or

Odd
 */

const  num=(n)=>
{
    const res=n%2===0?"even":"odd";
    console.log(res);
}
num(5);

/* Scenario 6: Maximum Number ⭐⭐

Accept two numbers.

Return the larger number.

Example

findMax(15,25);

Output

25 */

const findMax=(n,m)=>
{
    if(n>m)
    {
        return n;
    }
    else 
    {
        return m;
    }
}
console.log(findMax(15,25));
  
    // or

const Max=(n,m)=>(n>m?n:m);
console.log(Max(14,12));
