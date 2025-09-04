//server fetch - instant result
//let a = 2 + 3 -> is that instant or not ! yes it is 
//as it involves no api calls
//we can run it synchronously this line

//console.log("Hello")
//let a = 10;
//let b = 20;
// let temp = getWeatherInfo()
//let sum = a + b + temp

//here callstack doesn't wait for temp execution say it happens in 2 seconds 
//it just moves forward and since we get it's return late by then call stack would be done 
//so that's why we use promise here

//Promise
//-ki bhai abhi toh mere paas value ni hai 
//-jab milegi tab de deunga

// You’ve described the situation well. Let me refine it a bit:
// Normal function calls → synchronous. The call stack waits for the return value before moving ahead.
// Async operations (like getWeatherInfo()) → non-blocking. They are usually delegated to the browser’s APIs (like fetch, timers, etc.). The call stack doesn’t wait — it moves on.
// Since the async result (e.g., weather info) comes later, we need a mechanism to handle it once it’s ready → that’s where Promise comes in.

// A Promise basically says:
// "Right now, I don’t have the value."
// "I’ll either resolve (give the value) or reject (give an error) in the future."

//so synchronously we return first the promise then the value afterwards
//promise kehta hai mujhe callback function de de ki yar jb bhi mujhe value milegi mei aapka function run kr dunga ,matlab background mei micro-task queue mei daal dunga so that jb bhi voh value available hogi mei usse vapis call-stack  queue mei daal dunga 

//basically yeh keh rha ki tumne kuch maanga abhi tu mujhse promise le and 
//and promise aage se kehta hai tu mujhe ek callback function de
//ki bhai jb bhi promise pura hoga iss callback function ko call-stack mei daal dunga
//toh basically tera yeh code tb execute kr jayega jb value available hogi

//=========================================================================================

///how to code promises

//write this in browser (inspect element in console )
//we are using fetch() function here to fetch data through a api call

// console.log('Hi')
// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
// console.log('Data is', data)
// console.log('Bye')

// //output
// Hi
// Data is Promise { <pending> }
// Bye

// //console.log("Hi")
// //const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
// data.then((res) => console.log('Data Agya,res'))
// console.log('Bye')

// output
// Hi
// Bye
//Data Agya,res(which shows the fetched data)

{/* Case 1:
console.log('Hi')
const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
console.log('Data is', data)
console.log('Bye')


fetch() always returns a Promise immediately.
That’s why console.log('Data is', data) prints:Data is Promise { <pending> }
(pending means the request hasn’t completed yet).
JS doesn’t wait for fetch to finish, it just moves to the next line.

Output order:

Hi
Data is Promise { <pending> }
Bye

Case 2:
console.log("Hi")
const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
data.then((res) => console.log('Data Agya', res))
console.log('Bye')

Here you attach a .then(...) to the Promise.
JS again doesn’t wait, so it prints Hi and Bye first.
When the network request completes, the .then(...) callback runs.

Output order:

Hi
Bye
Data Agya <Response object>


👉 In short:
fetch is asynchronous.
Without .then or await, you only get a pending Promise.
With .then (or await inside async function), you get the actual response later. */}

//=====================================================================================

//This ultimately allows us to run the code asynchronously and handle the result when it's ready.
//this is the concept of promise
