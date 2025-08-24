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


// console.log('Age is', age);

// var age = 24;

//output is age is undefined
//=========================================

// test(); 

// function test(){
//     console.log('I am inside the test function')
// }

// age = 3000 

// console.log('Age is', age);

// var age = 24;

//output is age is 3000

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

//in both let and const 
//there is a concept known as "Temporal Dead Zone" (TDZ)
//so anything above first you declare a variable and you try above where the variable is declared to access it. it
//will throw an error as it is a dead zone

console.log('Age is ', age);

let age = 25;

