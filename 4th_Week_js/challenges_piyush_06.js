const obj = {
    personName: "Mukul",
    greet: function() {
        console.log(`Hello, ${this.personName}`);
    }
}


console.log("Hello from JS");

const a = 1
const b = 2

console.log('SUM',a + b)

console.log('Bye Bye')

//setTimeout( function() { console.log('Yeyeyeye') }, 1000 * 5)

setTimeout(() => console.log('I am delayed'), 5 * 1000);
setTimeout( obj.greet, 2 * 1000); // This will call the greet function after 2 seconds

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