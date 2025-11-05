// const age = 25;

// console.log('Age is', age);

//here age is 25

//=========================================

// console.log('Age is', age);

// const age = 25;

//will throw an error saying "Uncaught ReferenceError: age is not defined"

//=========================================

// test(); 

// function test(){
//     console.log('I am inside the test function')
// }

//output    : I am inside the test function

// Because function declarations are hoisted in JavaScript.
// Hoisting means:
// JavaScript moves the function declaration to the top of the execution context before the code runs.
// So behind the scenes, the JS engine treats your code like this:

// function test(){
//     console.log('I am inside the test function');
// }

// test();

// Even though the function is written below the call, JavaScript already knows about it during the creation phase.

//=========================================


// console.log('Age is', age);

// var age = 24;

//output is age is undefined
//=========================================
// age = 3000 

// console.log('Age is', age);

// var age = 24;

//output is age is 3000

// 
// Why? (Think like this story)
// Step 1: JavaScript scans the file first (before running anything)

// It sees:
// var age;


// Because of hoisting, JavaScript lifts (hoists) the declaration to the top.

// So internally, your code becomes:
// var age;     // JavaScript created the variable (hoisted)
// age = 3000;  // You are assigning value to that variable
// console.log("Age is", age);  // prints 3000
// age = 24;    // later value changes to 24

// 💡 Important Rule

// var is hoisted, but its value is NOT hoisted.
// JavaScript knows the variable age exists (because of hoisting)
// But the assignment = 24 happens later in the code
// That’s why the first assignment (age = 3000) works — the variable exists.
// Think of it like this:
// What JavaScript does	Your Code
// Declares age at top (hoisting)	var age = 24
// Does not assign value yet	age = 24 happens later
// 🚗 Real-life analogy
// Imagine you reserve a parking spot (declaration happens first)
// But your car doesn't park there yet (value assigned later)

// Final execution order
// | Line                         | What happens                           |
// | ---------------------------- | -------------------------------------- |
// | `var age` (hoisted to top)   | age exists but has no value yet        |
// | `age = 3000`                 | value becomes 3000                     |
// | `console.log("Age is", age)` | prints 3000                            |
// | `age = 24`                   | value updates but too late for console |

//=========================================

// test(); 

// function test(){
//     console.log('I am inside the test function')
// }

// age = 3000 

// console.log('Age is', age);

// let age = 24;

//output is age is error - cannot access age before initialization

//=========================================================

//Global Execution Context
//whenever you run a code before that it's global execution context gets created
//It has two phases 
//1st Part is Memory Phase
//2nd Part is Code Phase
//whatever variables or function we may have gets stored in memory phase.
//in memory phase every variable is initialized with undefined

// console.log('Age is ', age);

// var age = 25;

// console.log('Age is ', age);



//in code phase , code gets executed line by line
//so when first executed console.log('Age is ', age); age here is a variable, it will search for it in memory phase.
//since age variable is present, no error will come here it will just age is undefined,
//as in memory phase it is initialized with undefined
//in code phase, next we assign value of 25 to age (when we run code var age = 25)
//

//this loading of variable before hand is called hoisting in js
//hoisting allows us to use variables before they are declared

//================================================================================

//Do functions get hoisted? Answer is YES
//In memory Phase - both age variable and test function will be hoisted
//Age will remain undefined but test function gets hoisted along with it's body and you can see it while debugging
//This process is known as hoisting. 


// test();

// console.log('Age is ', age);

// var age = 25;

// function test(){
//     console.log('Testing')
// }

// console.log('Age is ', age);


//===============================================================================


// console.log('Age is ', age);

// var age = 25;

// var test = function test(){
//     console.log('Testing')
// }

// console.log('Age is ', age);

// test()

//Both age variable and test variable will get hoisted 
//their values would be undefined 
//even test function is being declared as a variable that's why it's value would also be undefined
//when in debugger when you reach line 118 
// it equals value of test variable to a function so if you call test afterwards, it will get called as a function

//==================================================================

//let doesn't get hoisted
//but in reality let and const are hoisted to the top of their block scope
//but they are not initialized
//so accessing them before declaration will result in a ReferenceError

// In reality, let and const ARE hoisted
// but they are NOT initialized with any value
//in both let and const 
//there is a concept known as "Temporal Dead Zone" (TDZ)
//so anything above first you declare a variable and you try above where the variable is declared to access it. it
//will throw an error as it is a dead zone
//you can access it only after declaration
//variable gets hoisted but you can't access it in temporal dead zone
//you can see the proof by error coming "Cannot access 'age' before initialization"
//and not this error coming ReferenceError : age is not defined'



console.log('Age is ', age);

let age = 25;

//===========================================

//so things in callstack works like this in low level design. 
//the whole global execution context gets pushed in call stack
//every codes , global execution context gets pushed to call stack and then it runs and then afterwards the whole global execution context gets deleted.
