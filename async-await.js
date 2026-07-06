// Question 1

// Create a function getCity() that returns a Promise.

// Resolve with:

// Lahore

// Use async/await to print:

// Lahore



function getCity() {
    return Promise.resolve("Lahore");
}

async function showCity() {
    const city = await getCity();
    console.log(city);
}

showCity();

// Question 2

// Create a function getAge() that returns:

// 21

// Using await, print:

// Age is 21

function getAge() {
    return Promise.resolve(21);
}

async function showAge() {
    const age = await getAge();
    console.log(`Age is ${age}`);
}

showAge();

// Question 3

// Create a Promise that resolves after 3 seconds with:

// Loading Complete

// Print the message using async/await.

function download() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Loading Complete");
        }, 3000);
    });
}

async function startDownload() {
    const message = await download();
    console.log(message);
}

startDownload();


function checkResult(marks) {
    return new Promise((resolve, reject) => {

        if (marks >= 50) {
            resolve("Passed");
        } else {
            reject("Failed");
        }

    });
}

async function result() {

    try {
        const message = await checkResult(80);
        console.log(message);
    } catch (error) {
        console.log(error);
    }

}

result();