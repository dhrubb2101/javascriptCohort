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
console.log("Hi") //sync operation
const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts') //async operation
data.then((res) => console.log('Data Agya', res))// synchronous operation
console.log('Bye') 

//.then is property of Promise, promise.prototype has function with name of then 
//and then function bolta hai ki tum na ek callback function de do
//aur jb bhi value available hogi mei callback function ko call kr dunga and value pass kr dunga 
Promise.prototype.then = function(callback){
  //when value available
  callback(value)
}
//jaise he value available hoti hai voh callback function  ko microtask queue mei daal dia hoga and vaha se callstack and then call kia hoga
//and callstack runs it


//Promise.then(userFn => microtaskQueue(callFn) //event loop will do it's work by putting the callback function in call stack and running it 

//async operations krne ke liye promises use hote hai 

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
//To complete asynchronous operations, we use Promises.
//just explain to you till now what is promise

//=====================================================================================

//now we study how to implement a promise
//when you first create a promise , it is in a pending state
//like an api call is pending until it gets a response
//yeh promise execute ho rha hai like jaise he aappne api call execute kri voh server tk abhi ja rhi hai
//after pending state two things happen 
//either promise gets fulfilled that whatever data you asked for you get it
//or promise gets rejected that there was an error and you get an error message
//say if server is down or anything
//so promise has two states after pending
//fulfilled
//rejected

//=====================================================================================

//Promise by default is in pending state
//so promise calls a then function from it's prototype 
//and us then ke andar ke ek function de de
//mei iss function ko call kr dunga jb bhi promise fulfilled hoga
//when this promise gets fulfilled toh jo .then ke andar function hai voh call ho jayega

//for ex - 
// console.log("Hi") //sync operation
// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts') //async operation
// data.then( function(){ console.log('Lo ji ,data Agya')})// synchronous operation
// console.log('Bye') 
//here the promise gets fulfilled and then function is called
//output
//Hi
//Bye
//Lo ji ,data Agya

//=====================================================================================
//now what if promise gets rejected

//we get error

//=====================================================================================

//.catch(function) 
//yeh bhi promise ka ek function hai jo promise ke prototype se aata hai
//yeh function bhi ek callback function leta hai
//aur yeh callback function ko call krta hai jb promise reject hota hai
//for ex -
// console.log("Hi") //sync operation
// const data = fetch('https://apioiiio.freeapi.app/api/v1/public/randomproducts') //async operation
// data.then( function(){ console.log('Lo ji ,data Agya')})// synchronous operation
// console.log('Bye') 
// data.catch( function(){ console.log('Areey Yaaar')})

//=====================================================================================

//finally(function)
//yeh bhi promise ka ek function hai jo promise ke prototype se aata hai
//yeh function bhi ek callback function leta hai
//aur yeh callback function ko call krta hai jb promise fulfilled ho ya reject ho
//yeh har baar call hota hai chahe promise fulfilled ho ya reject ho
//for ex -
// console.log("Hi") //sync operation
// const data = fetch('https://apioiiio.freeapi.app/api/v1/public/randomproducts') //async operation
// data.then( function(){ console.log('Lo ji ,data Agya')})// synchronous operation
// console.log('Bye') 
// data.catch( function(){ console.log('Areey Yaaar')})
// data.finally( function(){ console.log('Mujhe Farak ni padhta hai')})

//=====================================================================================

//This is how we use promises in JavaScript to handle asynchronous operations effectively.

//=====================================================================================

//there's another state of promise called settled state
//as per coding perspective, settled state is when the promise is either fulfilled or rejected
// it's just a jargon term to indicate that the promise is no longer pending; it has reached a final state, either success (fulfilled) or failure (rejected).
////in coding settled state is not used in js 
//you'll never see settled state in code anywhere

//=====================================================================================

//you request something form server
//it's answer can be Text,image,docPDF,JSON
//most of the time we get JSON
//JSON - JavaScript Object Notation
//it's a format to send data from server to client  
//it's a string in key value pair format
//like - {"name":"Dhrub","age":24}
//JSON is always in double quotes
//and we convert JSON to object using JSON.parse() function
//and we convert object to JSON using JSON.stringify() function0
//JSON.parse() and JSON.stringify() are synchronous functions
//here we are using json.parse() function to convert json to object

//to get it clear to use JSON data we have to first convert it from Json String to JSON object
//we have to parse the json string to json object
//for ex -
