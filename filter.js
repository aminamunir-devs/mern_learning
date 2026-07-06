// filter() loops through an array and creates a new array containing only the elements that satisfy a condition.

const num=[2,5,22,88,5,6];
const res=num.filter(x=>x>=21);
console.log(res);


const num1=[2,5,22,88,5,6];
const res1=num1.filter(x=>x%2===0);
console.log(res1);

const fruit=["apple","banana","mngo"];
const res2=fruit.filter(x=>x.length>4)
console.log(res2);