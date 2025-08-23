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
console.log('Age is ', age);

var age = 25;

console.log('Age is ', age);



//in code phase , code gets executed line by line
//so when first executed console.log('Age is ', age); age here is a variable, it will search for it in memory phase.
//since age variable is present, no error will come here it will just age is undefined,
//as in memory phase it is initialized with undefined
//in code phase, next we assign value of 25 to age (when we run code var age = 25)
//