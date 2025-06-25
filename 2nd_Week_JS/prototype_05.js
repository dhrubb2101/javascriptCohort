//Prototype
const arr = [1,2,3]

arr

const str = 'Piyush'

str

const obj = {x: 1}

obj.x
//how to access properties of an object
//dot notation
//dot operator object ke properties ko access krne mei help karta hai

//when you make an array, there are already functions defined for that array 
//these are functions already defined inside array
// for eg - .map,.filter,.reduce

//so if we define an array
//say const arr = [1,2,3]
//we can use these functions on the array
//like arr.map() or arr.filter()

//prototype is nothing but an object that is
//  created when you create an array or an object
//so when you define an array js automatically creates an object for that array
//and that object is called prototype
//and that prototype object has all the functions defined for that array in it. it stores a copy of all the functions that are defined for that array


//Similarly there's a built in thing in js called string
//string also has a function called .includes
//when you define a string
//say const str = 'Piyush'
//str.proto = {.includes} //here also js creates a prototype object for that string
//and that prototype object has all the functions defined for that string in it. it stores a
//str.includes() function that's why we cann do it
