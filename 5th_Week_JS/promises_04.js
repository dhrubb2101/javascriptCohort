//Synchronous code is also called blocking code
//Asynchronous code is also called non-blocking code

//it's called blocking code because the code execution is blocked until the synchronous code is executed (each line of code is executed one by one)

//it's called non-blocking code because the code execution is not blocked and can continue executing other code while waiting for the asynchronous operation to complete

//=====================================================================================

//let's write a code to read a file using fs module
// const fs = require('fs')

// console.log('Starting Program')

// const contents = fs.readFileSync('./hello.txt','utf-8')
// //reading the content of the file , it is sorta of a blocking code 

// console.log('File Reading Success' ,contents)

// console.log('End Of Program')

//output
// Starting Program
// File Reading Success  Hello, I am content of hello_05.txt 
// End Of Program

//this is a synchronous code
//as you can see in the output the program is blocked until the file is read
//hence it is called blocking code

//=====================================================================================

//now if we want this code to be non-blocking code, hence asynchronous code

//we do it like this

// const fs = require('fs')

// console.log('Starting Program')

// const contents1 = fs.readFile('./hello.txt', 'utf-8', function(err, content) { //we pass a callback function as the last argument 
//     if(err){
//         console.log('Error in file reading', err);
//     }else {
//         console.log('File Reading Success', content)
//     }
// });
//readfile is an asynchronous function
//it takes time to read the file
//hence it is a non-blocking code
//it will not block the program until the file is read
//it will continue executing the next line of code

// console.log('End Of Program')

//output
// Starting Program
// End Of Program
// File Reading Success Hello, I am content of hello_05.txt


//=====================================================================================
//consider another fuunction which first has blocking code and we want to turn it into asynchronous code

// console.log('Start of Program')
// const result = sum(2, 5)
// console.log('End of Program')

// function sum(a, b){
//     return a + b;
// }

//output
// Start of Program
// 7
// End of Program


//here the function sum is a blocking code
//as the function sum is a synchronous code
//hence it is a blocking code
//so the program is blocked until the function sum is executed

//====
//now we want to turn this blocking code into non-blocking code

// console.log('Start of Program')

// sum(2,5, (value)=> {
//     console.log('Result is', value) //this will be called when the sum function is executed
// })

// console.log('End of Program')

// function sum(a, b, cb){
//     setTimeout(()=> {
//         cb(a + b);
//     }, 5*1000) //simulating a delay of 5 seconds
// }

//output
// Start of Program
// End of Program
// Result is 7

//here we use setTimeout to simulate a delay of 5 seconds for say a very heavy computation of a heavy function
//here the function sum is a non-blocking code
//as the function sum is an asynchronous code
//hence it is a non-blocking code
//so the program is not blocked and continues executing the next line of code
//the result is printed after 5 seconds
//as we have used setTimeout to simulate a delay of 5 seconds
//hence the result is printed after 5 seconds

//this is how we turn a blocking code into non-blocking code using a callback function
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

//=====================================================================================

// Promises are a modern way to handle asynchronous operations in JavaScript, providing a cleaner and more manageable alternative to traditional callbacks.

//when promises were not present , we used to use callbacks to handle asynchronous operations which was always passed as a last parameter to the function.
//callbacks were always passed as the last parameter to the function
//and error as first parameter to the callback function

//here we saw in promises_04 how callbacks were used if promises were not there!

//===================================================================================== down below written using callbacks is legacy code

//1. Read the contents of file from hello.txt
//2. Then create new file named as backup.txt 
//3. Copy the contents of hello file to backup file
//4. delete the hello file
//this is a sequence of steps dependent on each other

//to write it in blocking code
//const file = fs.ReadFileSync(hello)
// fs.createFile(backup)
// fs.writeFile(backup,file)
// fs.delete(hello)
//wrote code here synchronously

//now to write it in non-blocking code

const fs = require('fs')

console.log('Starting Program')

const contents2 = fs.readFile('./hello.txt', 'utf-8', function(err, content) { //we pass a callback function as the last argument 
    if(err){
        console.log('Error in file reading', err);
    }else {
        console.log('File Reading Success', content)
        fs.writeFile('backup.txt', content, function(err){
            if(err){
                console.log('Error in file writing backup.txt', err);
            }else{
                fs.unlink('hello.txt', function(err){
                    if(err){
                        console.log('Error in deleting hello.txt', err);
                    }else{
                        console.log('hello.txt deleted successfully');
                    }
                });
            }
        });
    }
});

//when we are calling callbacks inside callbacks
//it is called callback hell
//it is also called pyramid of doom
//because the code is not readable
//it is very difficult to debug such code
//because ek ka input dusre ka output hai
//that's why we had to callbacks inside callbacks
//hence it is called callback hell

//===================================================================================== //modern way of writing the same code using promises

//when we do the same example using promises

const fsv2 = require('fs/promises');
const { callbackify } = require('util');

console.log('Starting Program')

fsv2
.readFile('./hello.txt', 'utf-8')
.then((content)=> {
    console.log('File reading success',content)
    fsv2.writeFile('./backup.txt', content)
.then(()=> fsv2.unlink('./hello.txt'))
.catch((e)=> console.log('Error', e))
})


//=====================================================================================

//both the programs are doing the same thing
//but the second program is using promises
//hence it is more readable and easier to debug
//because we are not doing callbacks inside callbacks
//hence it is not called callback hell or pyramid of doom

//=====================================================================================

//custom promises  - we use this to convert legacy code to promise based code

//callback supported code ko convert krna hai promise supported code mei

//readFile
//writeFile
//unlink 
//are callback fucntions that need to be promisified

function readFileWithPromise(filepath, encoding){
    return new Promise((resolve,reject) => { //when we create a new promise it takes a function as an argument which has two parameters resolve and reject 
        //it basically creates a new promise which is in pending state
        fs.readFile(filepath, encoding, (err, content) => {
            if(err){
                reject(err) //means the promise is rejected it will go into the rejected state
                //reject('Piyush') //Signal do - user ke catch functions ko execute kr do
            }else {
                resolve(content) // meeans the promise is fulfilled it will go into the fulfilled state
                //resolve('Piyush') //Signal do - user ke then functions ko execute kr do
            }
        });
    });
}

function writeFileWithPromise(filepath, content){
    return new Promise((resolve,reject) => {
        fs.writeFile(filepath,content, function(err){
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath){
    return new Promise((resolve,reject) => {
        fs.unlink(filepath, function(err){
            if(err){
                reject(err)

            }else{
                resolve()
            }
        })
    })
}

//so here we have succesfully created a custom promise where we converted legacy code to promise based code
//now we can use this custom promise to read a file

readFileWithPromise('./hello.txt', 'utf-8')
.then(content => writeFileWithPromise('./backup.txt'))
.then(()=> unlinkWithPromise('./hello.txt'))
.catch(e => console.log('Error', e))
.finally(()=> console.log("All done"))

// result
// .then((e)=> console.log('File reading success', e))
// .catch((e)=> console.log('Error', e))

//this is called as promisification of a callback function
//we have converted a callback function to a promise function
//hence we can use this custom promise to read a file


//===============================================================================================================

// Promises has pending, fulfilled and rejected states
// A promise has .then , .catch and .finally functiona

//.then , .catch and .finally functions are used to handle the promise states
//basically they consume the promise
//.then also works as a callback function
//so it's a possibility that within it code can go into callback hell
//hence we use async await to avoid callback hell
//it is nothing but a  syntactic sugar over promises
//they work internally over promises only
//they help in running asynchronous code in synchornous way mei run krne mei help krte hai 
//===============================================================================================================

//An example of of where async and await come into play
//where a Asynchronous code works in a synchronous way

console.log('Starting Program')

readFileWithPromise('./hello.txt', 'utf-8')
.then(content => writeFileWithPromise('./backup.txt'))
.then(()=> unlinkWithPromise('./hello.txt'))
.catch(e => console.log('Error', e))
.finally(()=> console.log("All done"))

console.log('Ending Program')

//output
// Starting Program
// Ending Program
// All done

//here the asynchronous code is working in a synchronous way
//see from line 421 to 426
//the code is written in a synchronous way
//but it is working in an asynchronous way
//hence it is called as asynchronous code working in a synchronous way
//how it working in synchronous way
//because each line of code is dependent on the previous line of code
//and running in sync after the previous line of code is executed
//hence it is called as asynchronous code working in a synchronous way
//===============================================================================================================

//we use promise chaining to avoid callback hell like chaining of .then functions or 
//we use async await to avoid callback hell

//===============================================================================================

//async await example 

console.log('Starting Program')

readFileWithPromise('./hello.txt', 'utf-8')
.then(content => writeFileWithPromise('./backup.txt'))
.then(()=> unlinkWithPromise('./hello.txt'))
.catch(e => console.log('Error', e))
.finally(()=> console.log("All done"))

// ==================== AURA +99999999999 ===============( syntactic sugar over promises )========================

//async await is a modern way to handle asynchronous operations in JavaScript
//it is a syntactic sugar over promises
//it makes the code more readable and easier to debug
//it helps in running asynchronous code in a synchronous way

console.log('Starting Program')

//async function always returns a promise
async function doTasks(){
    try{
        const filecontent = await readFileWithPromise('./hello.txt', 'utf-8')
        await writeFileWithPromise('./backup.txt', filecontent)
        await unlinkWithPromise('./hello.txt')
        console.log('All done with async await')
    } catch (error) {
        console.log('Error', error)
    } finally {
        console.log('Finally block executed')
    }
}
   

doTasks().then(() => console.log('doTasks completed'))
//doTasks is a promise
//hence we can use .then function to handle the promise
//.then function will be executed when the promise is resolved

console.log('Ending Program')
//output
// Starting Program
// Ending Program
// All done with async await
// Finally block executed
// doTasks completed

//basically the larger code still runs is asynchronous code
//it just looks because of async await it looks like synchronous code
//hence it is called as syntactic sugar over promises
//it makes the code more readable and easier to debug
//it helps in running asynchronous code in a synchronous way
//here the function dotasks gets called and it is a promise
//hence it will not block the program
//the program will continue executing the next line of code
//hence "Ending Program" is printed before "All done with async await"
//hence the asynchronous code is working in a synchronous way
//and within the function as well since we are using await asyc it ensures within the async function the asynchronous code behaves like a synchronous code where promise for each line of code is resolved before going to the next line of code

//==========================================================================================
// chatgpt said
// What you got right
// async functions always return a Promise ✔️
// That’s why you can use .then(...) after calling doTasks() ✔️
// The main thread doesn’t wait for doTasks() to finish; it moves on to "Ending Program" ✔️
// Inside the async function, using await makes each async call execute sequentially, just like synchronous code ✔️

// 🔹 Where the explanation can be clearer
// “Asynchronous code is working in a synchronous way” →
// That’s true inside doTasks (because of await).
// But outside, it’s still asynchronous. That’s why "Ending Program" prints before the doTasks logs.
// So the async code doesn’t really “become synchronous”; it just looks synchronous within that async function.
// Promises and non-blocking behavior →
// Promises don’t “make the larger code synchronous.”
// They allow async tasks to complete later without blocking the main thread.
// What really happens: the async tasks are deferred to the event loop / microtask queue, so JS keeps running the rest of the script first.


// 🔹 Corrected takeaway
// Inside doTasks → await makes async calls execute in sequence (synchronous-like).
// Outside doTasks → the async function runs in the background, and JS continues to the next line ("Ending Program") immediately.

// That’s why the output order is:

// Starting Program
// Ending Program
// All done with async await
// Finally block executed
// doTasks completed


//==========================================================================
// async/await is syntactic sugar on top of .then chaining, making it look synchronous and even cleaner.
//==================================================================
// chatgpt said

// Execution order:

// "Starting Program" → printed immediately.
// doTasks() is invoked, but since it’s async, control returns immediately to the next line.
// "Ending Program" → printed before doTasks() finishes.

// Inside doTasks() (async):
// If hello.txt exists →
// Content copied to backup.txt
// hello.txt deleted

// Logs:

// All done with async await
// Finally block executed


// If an error occurs (e.g., file missing) →

// Logs:

// Error [Error: ENOENT: no such file or directory, open './hello.txt']
// Finally block executed

// After doTasks() resolves, .then(...) runs → logs:

// doTasks completed

// ✅ Guaranteed output order (assuming no errors, hello.txt exists):
// Starting Program
// Ending Program
// All done with async await
// Finally block executed
// doTasks completed


// 👉 Would you like me to also show the error-case output order (when hello.txt is missing)?

// You said:
// if it is working like synchronous shouldn't async output come in between

// ChatGPT said:

// Good question 👍
// Here’s the key:
// async/await makes async code look synchronous inside the function body, but the function itself is still asynchronous.
// When you call doTasks(), JavaScript immediately returns a Promise without waiting for the body to finish.

// That’s why:

// console.log("Starting Program")
// doTasks()
// console.log("Ending Program")


// prints:

// Starting Program
// Ending Program   // printed before doTasks finishes
// ...async logs later...


// So inside doTasks the steps happen one after another (sequentially, like sync).
// But outside, the function is async → control is returned to the caller right away.

// 👉 In short:
// Inside doTasks: synchronous-looking execution.
// From the outside: asynchronous execution (so "Ending Program" jumps ahead).
//==================================================================
//here the code is stopping the code execution until the file is read before writing the file that is until readFileWithPromise promise is executed and resolved 
//that's why await keyword is used in line 460 where it is asking file be read before going to the next line of code WHERE a backup file needs to be created of file read
//then in line 461 await is used becuase file can be deleted only after it is written 
//hence await keyword is used to stop the code execution until the promise is resolved
//similarly in line 462 await is used because file can be deleted only after it is written
//hence await keyword is used to stop the code execution until the promise is resolved
//if you put in await keyword here it will resolve the promise here itself
//and whatever value you were going to get from .then gets returned here itself
//await kehta hai jo bhi uske aage promise hai usse ussi samay run kro and resolve kro and jo .then uska value return krna hai voh krei ussi time

//readFileWithPromise('./hello.txt', 'utf-8').then(fileContent => console.log(content))
//this above line represent the same thing as the line with await keyword
console.log('Ending Program')

//===========================================================================================

//consider another example
//we write a wait function which takes seconds as input and returns a promise which is resolved after the given seconds
//we use setTimeout to simulate a delay of given seconds
//we use this wait function in the doTasks function to wait for 10 seconds before deleting the hello.txt file

function wait(seconds){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            resolve()
        }, seconds * 1000)
    })
}

// wait(20).then(() => {
//     console.log('Waited for 20 seconds')
// }) //this will wait for 20 seconds and then print the message
//what is happening here is wait function returns a promise which is resolved after the given seconds
//hence we can use .then function to handle the promise
//.then function will be executed when the promise is resolved


async function doTasks(){
    try{
        const filecontent = await readFileWithPromise('./hello.txt', 'utf-8')
        await writeFileWithPromise('./backup.txt', filecontent)
        //wait 10 seconds
        await wait(10)
        await unlinkWithPromise('./hello.txt')
        console.log('All done with async await')
    } catch (error) {
        console.log('Error', error)
    } finally {
        console.log('Finally block executed')
    }
}

//===========================================================================================