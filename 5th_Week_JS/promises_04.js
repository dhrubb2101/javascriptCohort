//Synchronous code is also called blocking code
//Asynchronous code is also called non-blocking code

//it's called blocking code because the code execution is blocked until the synchronous code is executed (each line of code is executed one by one)

//it's called non-blocking code because the code execution is not blocked and can continue executing other code while waiting for the asynchronous operation to complete

//=====================================================================================

//let's write a code to read a file using fs module
const fs = require('fs')

console.log('Starting Program')

const contents = fs.readFileSync('./hello.txt','utf-8')
//reading the content of the file , it is sorta of a blocking code 

console.log('File Reading Success' ,contents)

console.log('End Of Program')

//=====================================================================================

//consider a server which is handling multiple requests
//if one request is taking time to process then the other requests will be blocked until the first request is completed
//this is called blocking code
//like above example mei file read kr rhe hai toh jab tak file read nhi ho jata tab tak program ruk jayega
//say it takes 5 seconds to read the file toh 5 seconds tak program ruk jayega

//=====================================================================================

//Meaning of a callback function 
//Actual Meaning with an example

function testing (x) {
    x();
}

testing(1)
testing('Piyush')
testing( function(){}) //here we are passing a function as an argument to another function
//this is called a callback function
//a callback function is a function that is passed as an argument to another function and is executed after some operation is completed

//as x here becomes a function and we are able to call it using x()
//Hence testing( function(){}) is a callback function

// The actual callback function is the function() { console.log("Hello!"); } that you pass as an argument.
// Inside testing, the parameter x is just a reference (a placeholder name) for that callback.

// 👉 So:
// function() { console.log("Hello!") } → callback function (real one you pass)
// x → variable holding that function
//=====================================================================================