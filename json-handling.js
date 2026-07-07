// Convert object into JSON.

const model=
{
    name:"leptop",
    price:50000
};

const jsonproduct=JSON.stringify(model);
console.log(jsonproduct);
console.log(typeof jsonproduct);

// Convert JSON into object.

const data='{"city":"lahore","country":"pakistan"}';
const obj=JSON.parse(data);
console.log(obj);
console.log(typeof obj);

// Scenario 1 – User Registration

// A user fills out a registration form.

// const user = {
//     name: "Amina",
//     email: "amina@gmail.com",
//     password: "12345"
// };
// Task

// Before sending the data to the server, convert it to JSON.

const user = {
    name: "Amina",
    email: "amina@gmail.com",
    password: "12345"
};

const userdata=JSON.stringify(user);
console.log(userdata);


// 🌟 Scenario 2 – Server Response

// The server sends

// const response = '{"name":"Ali","age":25,"city":"Lahore"}';
// Task

// Convert it into an object and print

// Name:
// Age:
// City:

const response = '{"name":"Ali","age":25,"city":"Lahore"}';
const user1=JSON.parse(response);
console.log(`Name: ${user1.name}`);
console.log(`Age: ${user1.age}`);
console.log(`City: ${user1.city}`);