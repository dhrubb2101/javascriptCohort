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