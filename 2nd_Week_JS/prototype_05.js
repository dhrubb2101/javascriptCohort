//Prototype
const arr = [1,2,3]

arr

const str = 'Piyush'

str.length //6

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

//Array.prototype = {properties} //Here Array is the class and prototype is the object that is created when you create an array
//const arr = [1,2,3]
//arr.__proto__ = Array.prototype //this is how the prototype object looks like
//arr.__proto__ is the prototype object of the array
//__proto__ is a property of the array that points to the prototype object of the array
//so when you do arr.__proto__ it will give you the prototype object basically a copy of the prototype properties of the array

//An example 
//Father {skin, height, eyeColor}
//biologically inherited from father for child
//Child {skin, height, eyeColor} //child inherits the properties of the father
//here father is the base class or parent classs
//uske andar ek prototype object hai jiske andar skin, height, eyeColor properties hain
//Children.__proto__ = Father.prototype //yehi toh ek link banara h ki yeh child iss fatther ko belong krta h
//Similarly consider we have a class called String
//and it will have some built in classes like prototype


//String.prototype = {}
//const str = "PIY"
//str.__proto__ = String.prototype //issi se pata chal rha hai ki str is a child of String class
//and jitni properties String class ke andar hain
//wo sab str ke andar bhi hain becuase voh uska child hai

//Basically arr.__proto__ is the prototype object of the array which contains all the properties and methods of the array
//similarly str.__proto__ is the prototype object of the string which contains all the properties
//Array.prototype here prototype is object
//toh usmei hum ek new property define krte hai
//Array.prototype.piyush = function(){ console.log('This is hacked by Piyush)}
//now we can use this property on any array
//like arr.piyush() //This is hacked by Piyush

//so we have an example were we use piyush as a property in an array we define
//const arr2 = [1,2,3,4,5]
//arr2.piyush() //yeh kyu hua because arr2.__proto__ is Array.prototype
//and Array.prototype has a property called piyush
//and this is an example of inheritance in js
//so when you create an array or an object, js automatically creates a prototype object for that
//now go to -> fun.js for an example hitesh sir gave before all this now that wouuld make sense after learning this
