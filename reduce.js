// What is reduce()?

// reduce() takes all the elements of an array and combines them into one final value.

// That final value can be:

// A number ✅
// A string ✅
// An object ✅
// An array ✅

// The key idea is:


const numbers = [10, 20, 30, 40];
const total=numbers.reduce((sum,num)=>
{
    return sum+num
},0);
console.log(total);

// find Largest Number
// const numbers = [10,50,30,80,20];

// const largest = numbers.reduce((max,num)=>{
//     return num > max ? num : max;
// });

// console.log(largest);

// Output

// 80

const num3 = [10,50,30,80,20];
const res3=num3.reduce((max,num)=>
{
    return num>max?num:max;
})
console.log(res3);

// Count Total Characters
// const words = ["JS","HTML","CSS"];

// const totalCharacters = words.reduce((count,word)=>{
//     return count + word.length;
// },0);

// console.log(totalCharacters);

// Output

// 9

 const words = ["JS","HTML","CSS"];
 const res4=words.reduce((count,num)=>
 {
    return count+num.length;
 }
 ,0)
console.log(res4)
