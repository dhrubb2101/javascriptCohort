const fruits = [1,2,3,4,5]

fruits[1]
fruits[-1]
//this gives the last element of the array

//to achieve negative indexing how do we do it 
//that is fruits[-1]

//this is what we achieve to learn from now on.
//more things to learn in js

//=======================================================

//js has two things data and operations 
//for ex hitesh is data 
//age is 19 
//we keep it in memory and we give reference namely "name" and " age" to both

//=======================================================

// scope issue comes for var, so never use it

//=======================================================

let name = "hitesh"
const pi = 3.14
//(use const more than let)

//=======================================================

//types of datatypes in js
//primtive datatypes
//object datatype
//all datatypes must be in camel case in js

let number = 42 //Number is a primitive datatype
let text = "Hello, World!" //String is a primitive datatype
let isTrue = true //Boolean is a primitive datatype
let nothing = null //Null is a primitive datatype (output will be object due to JavaScript's type coercion)(this is an exception). it should have been null datataype but it is defined as object datataype.
let undefinedVar = undefined //undefined is the primitive datatype
let symbolVar = Symbol() //Symbol is a primitive datatype

console.log(typeof nothing); // Output: object (this is a quirk in JavaScript)
console.log(typeof undefinedVar)

