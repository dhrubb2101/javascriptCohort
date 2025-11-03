// function greet(parameter) {
//     console.log(`Hello ${name}`);
// }

// greet("Hitesh") // Output: "Hello Hitesh"
// greet("Piyush") // Output: "Hello Piyush"
 
//=========================================================

let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "I am modified"
    let blockedScopedVar = "I am blocked-scoped"
    console.log(blockedScopedVar); // Output: "I am blocked-scoped"
}

modifyGlobal()

//here globalVar is modified and blockedScopedVar is not accessible outside the function

console.log(globalVar); // Output: "I am modified"
// console.log(blockedScopedVar); // Uncaught ReferenceError: blockedScopedVar is not defined
//=========================================================
//IFFE function
//when the first page loads for the firt time or DOM loads for the first time, this function is called
//IFFE (Immediately Invoked Function Expression)
let config = function(){
    let settings = {
        theme: "dark",
        language: "en"
    }
    return settings
}() // <-- called immediately
// The function executes immediately.
// Whatever it returns (settings) gets stored in config.
// After this, config is NOT a function anymore, it’s just the returned object.
//another way to write IFFE (()=>{})()
//this is used to run the code immediately when the page loads
//it is a use and throw function , it is used once and then discarded


config() //TypeError: config is not a function
console.log(config.theme);     // "dark"
console.log(config.language);  // "en"
// ❌ You do not call config() afterwards, because it's now an object, not a function.

// why is it an object and not a function (IIFE)?
// //step1 : We create a function 
// function () { ... }
//Step 2: You immediately call it by using () right after it:
//function () { ... }()
//Step 3 : Whatever the function returns becomes the value of config.
// The function returns:
// {
//     theme: "dark",
//     language: "en"
// }
// So config becomes that object.
// //So effectively, the line becomes:
// let config = {
//     theme: "dark",
//     language: "en"
// };
// Therefore, config stores the returned object, not the function itself.

// | Code part              | Meaning                                              |
// | ---------------------- | ---------------------------------------------------- |
// | `function() { ... }`   | Defines a function                                   |
// | `function() { ... }()` | Executes the function immediately                    |
// | `let config = ...`     | Stores the **result of execution**, NOT the function |

//In Short 
// IIFE executes immediately and assigns the return value, not the function.
//=========================================================

let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}
// Here, this refers to the object that invokes the function.
//person1.greet()  // -> "Hello ravi"
//call() executes a function immediately and lets you manually set what this should refer to.
//call() runs the function greet()
//It sets this to refer to person
//Output: Hello Hitesh

let person2 = {
    name: "hitesh"
}

person1.greet.call(person2) // Output: "Hello hitesh"
//call method is used to call the function with a specific context
//here person2 is passed as the context and hence this.name refers to person2.name

const bindGreet = person1.greet.bind(person2)
bindGreet() // Output: "Hello hitesh"
//bind method is used to return a new function with a specific context

//here bindGreet is a new function which has person2 as the context permanently
//and hence when we call bindGreet() it will always refer to person2 as the context

//=========================================================

//we cannot directly use personName as it is not defined in the global scope
//we need to use this keyword to refer to the object itself

// Inside your object:

// let person1 = {
//     personName: "ravi",
//     greet: function(){
//         console.log(`Hello, ${this.personName}`)
//     }
// }


// You might wonder why not just write:

// console.log(`Hello, personName`)

// Reason

// personName is a property of the object, not a standalone variable.
// JavaScript won’t magically look inside the object for personName.
// To access a property inside the same object, you must use this.propertyName.

//  Example of the difference

// let person1 = {
//     personName: "ravi",
//     greet: function(){
//         console.log(personName);  //  ReferenceError: personName is not defined
//     }
// }


// Why error? → Because JS looks for a variable called personName in scope, but doesn’t find it.

// Correct way:

// let person1 = {
//     personName: "ravi",
//     greet: function(){
//         console.log(this.personName); // "ravi"
//     }
// }


// In short:

// this.personName → means “the personName property of this object”.
// Just personName → JS thinks it’s a variable, not an object property.

//==========================================================================================

let person3 = {
    personName: "ravi",
    greet: function(){
        console.log(`Hello, ${this.personName}`)
    }
}

let person4 = {
    personName: "Hitesh",

}       
// "Hey JavaScript, borrow the greet function from person3,
// and run it as if it belongs to person4."
// You can reuse methods from one object on another object without copying code.

// Even if two objects are shaped the same,
// JavaScript does not automatically treat them as the same —
// each object has its own identity.

// Think of it like this:

// Two people may both have a name,
// but only one of them knows how to greet.

// With .call(), you are telling the greeter:

// "Greet on behalf of this other person."
// //what we are doing here is we are calling the greet function of person3 object with the context of person4 object
//we are trying to change the context of the greet function
//to change the context we use call method
//that's why you see here we don't call greet function directly but use call ahead
//person3.greet() // no we are directly calling greet here
//person3.greet.call(person4) //we are calling greet function of person3 object with the context of person4 object
person3.greet.call({personName: "Mukul"})


//=========================================================

//try using bind method on your own

//=========================================================

// Sure — here’s a clear example using your same objects, showing how bind() works:

// let person3 = {
//     personName: "ravi",
//     greet: function () {
//         console.log(`Hello, ${this.personName}`);
//     }
// };

// let person4 = {
//     personName: "Hitesh"
// };

//=======================================================================================
//Use of Bind method

// Using bind()
// const greetHitesh = person3.greet.bind(person4);

// greetHitesh();  // Output: "Hello, Hitesh"

// 🔍 Explanation

// bind(person4) does NOT execute the function immediately.
// Instead, it creates a new function where this is permanently set to person4.
// So now:
// greetHitesh(); // behaves as if greet belongs to person4

// ✅ Showing the difference between call() and bind()
// Method	Executes immediately?	Returns
// call()	✅ Yes	Result of the function
// bind()	❌ No	A new function with this locked
// Another demonstration:
// const greetLater = person3.greet.bind(person4);

// setTimeout(greetLater, 2000);  
// // After 2 seconds → "Hello, Hitesh"


// Here bind() is useful because even if the function is executed later,
// this still refers to person4.
