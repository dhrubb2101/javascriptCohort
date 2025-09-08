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

//this is a synchronous code
//as you can see in the output the program is blocked until the file is read
//hence it is called blocking code

//=====================================================================================

//now if we want this code to be non-blocking code, hence asynchronous code

//we do it like this

const fs = require('fs')

console.log('Starting Program')

const contents1 = fs.readFile('./hello.txt', 'utf-8', function(err, content) { //we pass a callback function as the last argument 
    if(err){
        console.log('Error in file reading', err);
    }else {
        console.log('File Reading Success', content)
    }
});
//readfile is an asynchronous function
//it takes time to read the file
//hence it is a non-blocking code
//it will not block the program until the file is read
//it will continue executing the next line of code
console.log('File Reading Success' ,contents1)

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

// function testing (x) {
//     x();
// }

// testing(1)
// testing('Piyush')
// testing( function(){}) //here we are passing a function as an argument to another function
//this is called a callback function
//a callback function is a function that is passed as an argument to another function and is executed after some operation is completed

//as x here becomes a function and we are able to call it using x()
//Hence function(){} inside the testing is a callback function

// The actual callback function is the function() { console.log("Hello!"); } that you pass as an argument.
// Inside testing, the parameter x is just a reference (a placeholder name) for that callback.

// 👉 So:
// function() { console.log("Hello!") } → callback function (real one you pass)
// x → variable holding that function

//inside testing, function(){} is a callback function
//a function that is passed as an argument to another function and is executed after some operation is completed
//=====================================================================================

// function load(){
//   file read
//   return
// }

// const content = load()

//here there is a function called load which is reading a file and returning the content of the file
//and this function gets executed and the content of the file is stored in a variable called content
//it is an intensive operation
//it takes time to read the file
//so the program will be blocked until the file is read and the content is returned
//so this is a blocking code

//=====

//so we refactor the code using a callback function

// function load(callback){
//   file read
//   callback(content)
// }
// load((content)=> {kuch bhi kro f content})

//yaha pr tum mujhe ek callback function de do 
// and instead of returning the result  
//jb yeh file read ho jayega tb mei tumhare callback ko call kr dunga 
//aur file ke contents ismei pass kr dunga 
// toh ab mujhe return mei kuch nhi milega 
//so now in load we pass a arrow function as a callback function
//load((content)=> {kuch bhi kro f content})
//kyu ki yeh function background mei work krta rahega
//hence yeh ek asynchronous code ban gaya from synchronous code

//=====================================================================================

// 1. Synchronous (blocking) behavior

// In synchronous code:

// const fs = require('fs');

// function loadSync() {
//   const content = fs.readFileSync('data.txt', 'utf8'); // file reading happens here
//   return content;
// }

// const content = loadSync();  // program is paused until file is read
// console.log(content);        // only executes after file reading finishes

// Here, fs.readFileSync blocks the program.
// If the file is very large, or reading takes 2 seconds, your whole program is stuck for 2 seconds.
// Nothing else runs during this time.

// 2. Asynchronous (non-blocking) behavior
// With a callback:

// const fs = require('fs');

// function load(callback) {
//   fs.readFile('data.txt', 'utf8', (err, content) => {
//     if (err) return callback(err);
//     callback(null, content); // call after file is read
//   });
// }

// load((err, content) => {
//   if (err) console.error(err);
//   else console.log('File content:', content);
// });

// console.log('This prints immediately!');


// What happens behind the scenes:

// You call load(...).
// fs.readFile tells Node.js: “Please read this file, and when done, call this function (callback).”
// Node.js offloads the file reading to the OS and does not wait.
// Meanwhile, your program continues to run → that’s why "This prints immediately!" shows before file content.
// When the file is ready, Node.js invokes your callback with the result (content).

// 3. Why is it non-blocking?
// Because the main thread (JavaScript execution) is not paused.
// File reading is done by the OS / Node.js I/O system.
// The callback is queued and executed later (via the event loop) when the data is ready.

// 4. Analogy
// Synchronous: You go to a restaurant, order food, and just sit there doing nothing until food comes.
// Asynchronous (callback): You order food, then continue talking with friends. When the food is ready, the waiter (callback) comes and serves you.
// ✅ So, with callbacks, your code does not waste time waiting for long operations. Instead, you keep the program responsive and let the result arrive later.