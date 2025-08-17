function greet(parameter) {
    console.log(`Hello ${name}`);
}

greet("Hitesh") // Output: "Hello Hitesh"
greet("Piyush") // Output: "Hello Piyush"

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
//IFFE
let config = function(){
    let settings = {
        theme: "dark",
        language: "en"
    }
    return settings
}()
//another way to write IFFE (()=>{})()
//this is used to run the code immediately when the page loads
//it is a use and throw function , it is used once and then discarded


config()

//=========================================================

let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

//this refers to the object itself

let person2 = {
    name: "hitesh"
}

person1.greet.call(person2) // Output: "Hello hitesh"
//call method is used to call the function with a specific context
//here person2 is passed as the context and hence this.name refers to person2.name

const bindGreet = person1.greet.bind(person2)
bindGreet() // Output: "Hello hitesh"
//bind method is used to return a new function with a specific context

//here bindGreet is a new function which has person2 as the context

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

let person3 = {
    personName: "ravi",
    greet: function(){
        console.log(`Hello, ${this.personName}`)
    }
}

let person4 = {
    personName: "Hitesh",

}

//what we are doing here is we are calling the greet function of person3 object with the context of person4 object
//we are trying to change the context of the greet function
//to change the context we use call method
//that's why you see here we don't call greet function directly but use call ahead
//person3.greet() // no we are directly calling greet here
//person3.greet.call(person4) //we are calling greet function of person3 object with the context of person4 object
person3.greet.call({personName: "Mukul"})


//=========================================================

//try using bind method on your own

//=========================================================