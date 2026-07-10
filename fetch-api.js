async function getUser(){
 try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
 
 const user=await response.json();
 console.log(user);
    
 }
catch(error)
{
    console.log(error);
}
}
getUser();

// Print only the first user.

async function getUser1(){
 try{
    const response1=await fetch("https://jsonplaceholder.typicode.com/users")
 
 const user1=await response1.json();
 console.log(`first user is ${user1[0]}`);
    
 }
catch(error)
{
    console.log(error);
}
}
getUser1();

// GET (Read Data)

// Imagine you open Amazon.

// You only want to see the products.

// You are not adding, editing, or deleting anything.

// You
//  ↓
// "Show me all products."
//  ↓
// Server
//  ↓
// Products List

const res1=await fetch("https://jsonplaceholder.typicode.com/posts");
const pro1=await res1.json();
console.log(pro1);

// POST (Create New Data)

// Now you want to add a new product.

// Current products:

// Laptop
// Phone

// You add:

// Headphones

// Now the database becomes:

// Laptop
// Phone
// Headphones

console.log("------------------------------------------------------------------------------------------")

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title: "My New Post",
        body: "Learning Fetch API",
        userId: 1
    })
})
console.log("------------------------------------------------------------------------------------------")

// PUT (Update Data)

// Suppose the product price is wrong.

// Before:

// Laptop
// Price = 50000

// You update it.

// After:

// Laptop
// Price = 55000
fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
              id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1
        })
    }
)

// DELETE (Delete Data)

// Suppose you remove a product.

// Before:

// Laptop
// Phone
// Tablet

// Delete:

// Phone

// After:

// Laptop
// Tablet

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
});