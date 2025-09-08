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
