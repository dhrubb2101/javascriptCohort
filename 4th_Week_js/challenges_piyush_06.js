// const obj = {
//     personName: "Mukul",
//     greet: function() {
//         console.log(`Hello, ${this.personName}`);
//     }
// }


// console.log("Hello from JS");

// const a = 1
// const b = 2

// console.log('SUM',a + b)

// setTimeout(() => console.log('I am delayed'), 5 * 1000);
// setTimeout( obj.greet, 2 * 1000);

// console.log('Bye Bye')

//setTimeout( function() { console.log('Yeyeyeye') }, 1000 * 5)

 // This will call the greet function after 2 seconds

//=========================================================

//js has a call stack 
//call stack is the js sengine that keeps track of the execution context
//call stacks quickly execute the code in the order it is written
//call stack ko jaise he piece of code milta hai it will directly execute it and throw it out
//call stack - it waits for nothing
//call stack - executed anything you throw in it
//setTimeout - is not the method of js , it is method of browser. So when you use it created a delay of n seconds
//and then goes into the call stack and it directly executes it


//when call stack executed the setTimeout code
//what really happens is setTimeout sets a background timer in the browser 
//until the timer expires, the call stack is free to execute other code
//once the timer expires, the setTimeout code is added to the callback queue and not directly added to the calstack and 
//it is queue FIFO (First In First Out)
//when the call stack is empty, the event loop checks the callback queue and moves the setTimeout code to the call stack for execution
//event loop is the one that checks the call stack and the callback queue
//and takes the code from the callback queue and adds it to the call stack for execution

//now in this setTimeout code
// console.log("Hello from JS");

// const a = 1
// const b = 2

// console.log('SUM',a + b)

// setTimeout(() => console.log('I am delayed'), 5 * 1000);
// setTimeout( obj.greet, 0);

// console.log('Bye Bye')

//what happens is even if timeOut delay is zero, it will still go to the callback queue and wait for the call stack to be empty
//and then it will be executed
//since it is a timeout code of 0 seconds it will go to browser set up a background clock of 0 seconds
//and then it will be added to the callback queue and wait for the call stack to be empty
//that's why in output we see "Bye Bye" first and then we see "I am delayed last" becuase this code gets executed at last 

//=========================================================
//now do you understnad why setTimeout code was coming in last 
//==========================================================

// function xyz(){
//     const abc = 1
// }

//scope of abc inside xyz function 
//abc is not accessible outside the xyz function
//it gets destroyed once it goes out of the xyz function    
//=========================================================

const obj2 = {
    personName: "Akash",
    greet: function() {
        console.log(`Hello, ${this.personName}`);
    }
}
console.log("Hello from JS");

// setTimeout(obj2.greet, 1000 * 5); // Output: "Hello, undefined"
setTimeout(obj2.greet.bind(obj2), 1000 * 5); // Output: "Hello, Akash"

console.log('Bye Bye');

//=========================================================
//Promise in js
//if there is a client (user,laptop,browser) 
//client sends a request to the server to recieve some data from the server
//it takes some time for the server to process the request and send the data back to the client
//it takes 2-3 seconds
//so in this case what happens is whenever we call an API , call stack is always in a hurry and since client has not recieved the data yet 
//it will not wait for the server to respond and will move on to the next line of code
//in this it returns a promise, the call stack returns a promise to the client that it will send the data back to the client once it is ready
//and then the client can use the data once it is ready
///this is where the promise comes into play

//promise is therefore used in cases where we din't have the data currently but it will come in the future there we use promises concept
//in future we will recieve the result and in the meantime we use promise
//

console.log("Hello from JS");

setTimeout(() => console.log("Hello after 2s"), 2* 1000)

Promise.resolve().then(() => console.log("Promise Resolve Hogya"))
console.log("Bye")

//output will be 
//Hello from JS
//Promise Resolve Hogya
//Bye
//Hello after 2s

//=========================================================

console.log("Hello from JS");

setTimeout(() => console.log("Hello after 2s"), 0)

Promise.resolve().then(() => console.log("Promise Resolve Hogya"))

setTimeout(() => console.log("Hello after 2s"), 0)

console.log("Bye")

//output will be
//Hello from JS 
//Promise Resolve Hogya
//Bye
//Hello after 2s


//=========================================================

//in browsers we can run timers, promises in background
////there are two queues in the browser
//one is the callback queue and another is the microtask queue
//callback queue is used for setTimeout, setInterval, setImmediate, etc.
//microtask queue is used for promises and mutation observer callbacks
//microtask queue has higher priority than callback queue
//so when the call stack is empty, the event loop checks the microtask queue first and executes all the microtasks before moving on to the callback queue
//consider microtask queue as a high priority queue and callback queue as a low priority queue
//consider microtask queue as ladies first for toilet

//=========================================================

console.log("Hello from JS");

setTimeout(() => console.log("Hello after 2s"), 0)

Promise.resolve().then(() => {
    console.log("1. Promise Resolve Hogya")
    
       Promise.resolve().then(() => {
           console.log("2. Promise Resolve Hogya")

           Promise.resolve().then(() => {
               console.log("3. Promise resolve hogaya")

               Promise.resolve().then(() => {
                   console.log("4. Promise resolve hogaya")
               })
           })
       })
   })

//starvation of the call stack
//as once one promise gets resolved, it will keep on resolving the next promise in the chain
//one promise gets resolved then another promise gets in queue in micro task queue and that goes on infinitely 
//therefore callback queue ki baari kabhi ayegi he nahi 
//that is call starvation of the it's callback queue



console.log("Bye")

//===================================================================

    function shinyDiamondRug(n) {
    let spaces = 0;
    let stars = 0;
    for(let i = 0; i < n; i++){
        let row = "";

        for(let j = 0; j < n-i; j++){
            row = row + " "
        }

        for(let j = 0; j < 2*i - 1; j++){
            row = row + "*"
        }
        console.log(row)
    }
    for(let i = n; i > 0; i--){
        let row = ""
        
        for(let j = 0; j < n - i ; j++){
            row = row + " "
        }
        for(let j = 0; j < 2*i - 1; j++){
            row = row + "*"
        }
        console.log(row)
    }
}

shinyDiamondRug(4)

//==================================================

