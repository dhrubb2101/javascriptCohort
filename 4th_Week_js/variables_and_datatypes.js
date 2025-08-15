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


//=======================================================

//object datatype

let person = {
    name: "hitesh",
    age: 19,
    isStudent:true
}

//========================================================

//page,forms,session
//page - is the current page you are on (sennding the page to user)
//forms - is the data you are submitting
//session - user logged in or not (and it's authority)

//========================================================

//you'll always be recieving data in js
//now you hsould know the convert the data  
//as data can be sent in different format 
//for ex:

let num = "42"; // string
//zyadatar data is sent in string format when travelling the web
//toh humme usse convert krne ki techniques aani chahiye and sab techniques ke pros and cons hote hain
//and uske expectedResult bhi pata hone chahiye
let convertedNum = Number(num); // Convert string to number

console.log(convertedNum); // Output: 42 (number type)
console.log(typeof convertedNum); // Output: number

//=======================================================

//if 
//this is the standard way to convert string to number

let num1 = "42a"
let convertedNum1 = Number(num1)
//this will give NaN (Not a Number) because "42a" cannot be converted to a number
//it is a response and not a datatype
//jb bhi mei aage badhunga, mei conditionally check krke aage badhunga ki meine jo conversion kia hai ki actually mei uska type number hai ya not a number hai

console.log(convertedNum1); // Output: NaN
console.log(typeof convertedNum1); // Output: number (but it is NaN)

//=======================================================
//another method to do the conversion 
let num2 = "42a"
let convertedNum2 = +num2

console.log(convertedNum2); // Output: NaN
console.log(typeof convertedNum2); // Output: number (but it is NaN)

//=======================================================

let num3 ="42"
let convertedNum3 = +num3

console.log(convertedNum3); // Output: 42
console.log(typeof convertedNum3); // Output: number    

//=======================================================

let num4 = "a42a" 
let convertedNum4 = parseInt(num4)

console.log(convertedNum4); // Output: 42
console.log(typeof convertedNum4); // Output: number

// ChatGPT said:
// Here’s what’s happening in your two cases — it’s all about where the number starts in the string and how parseInt() works:

// Case 1:

// let num4 = "a42a";
// let convertedNum4 = parseInt(num4);
// parseInt() starts reading from the first character.

// If the first character is not a number (or +/-), parsing stops immediately and returns NaN.
// "a42a" starts with a, so it can’t even begin parsing a number.


// convertedNum4 // NaN
// typeof convertedNum4 // "number"


// Case 2:

// let num4 = "42a";
// let convertedNum4 = parseInt(num4);
// Here, the string starts with 4, so parseInt() begins reading and keeps going until it hits a non-digit (a).

// It successfully parses "42" and ignores the rest.

// convertedNum4 // 42
// typeof convertedNum4 // "number"


//  Rule of thumb for parseInt()

// If the string starts with digits → parse until a non-digit is hit.
// If the string starts with a non-digit → return NaN.
// If you want to fail completely when extra characters are present, use Number() instead of parseInt().
//=======================================================

//chaicode.com/event/1234543abbbcd2313

//=======================================================

let str = 123
let convertedString = String(str)

console.log(convertedString); // Output: "123"
console.log(typeof convertedString); // Output: string

//=======================================================

//Operations

let a = 10
let b = 3 

let sum =  a + b // Addition
let difference = a - b // Subtraction       
let product = a * b // Multiplication
let quotient = a / b // Division
let remainder = a % b // Modulus (Remainder)
let power = a ** b // Exponentiation (a raised to the power of b)

//========================================================
