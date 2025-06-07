//when ram asks for some space we use let and const 
//string - sequence of characters
//you can declare it using three ways - '',"",``

let name = "Rohit"
//Number - 25, 25.9
let age = 25.5;
//boolean - true or false
let isPaid = true;

let favoriteClass = null
//null means nothingness, it is empty

//undefined means baad mei dekhenge, like has defined that it is empty well undefined means 
//it has nothing, nothing has been defined in it.
//like for null it is defined it is empty.

let hometown; 
// console.log(favoriteClass);
// console.log(hometown);

//It's an array datatype
let skills = ["html","css","Javascript"]

//It'sobject datatype
let studentProfile = {
    name : "Rohit",
    age : 22,
    isPaid : true,
    skills : ["html","CSS","Javascript"],
    favoriteClass : null,
}

//These are the most important data types in javascript and most used.

console.log(typeof isPaid); //boolean
console.log(typeof skills)  //object - another name for array
console.log(typeof studentProfile) //object - it is object 
console.log(typeof favoriteClass) //object - null is also an object in js
console.log(typeof hometown) //undefined - it is not defined yet so it is not non-primitive or primitive datatype

//primitive data types - string, number, boolean, null, undefined
//non-primitive data types - array, object