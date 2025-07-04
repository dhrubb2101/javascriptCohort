//objects represents the real world entities
//everything are a real world entity 
//and those entities have properties and methods
//for example a car is a real world entity
//and it has properties like color, model, brand, etc.

//objects have properties and methods
//properties are the attributes of the objects 
//like color, model, brand, etc.
//Methods are the actions,functions that the object can perform
//like start, stop, accelerate, etc.

//What is the difference between an function and method
//There's no actual difference between a function and a method
//A method is a function that is associated with an object
//So when we say method, we mean a function that is associated with an object
//So when we say function, we mean a standalone function

//To add interactivity to web browser, Javascript was created
//and it was created to make web pages dynamic
//javascript was only meant to be used in web browsers
//but now it is used in many other places like Node.js, React Native, etc.
//So now javascript works as a standalone language
//and it is not just limited to web browsers

//const obj = {
// prop,Methods
//}

// this is a object literal and it can group key value pairs
//Define a class in js 
//and you can create an object from that class
//it means both objects have the same schema as the class they were created from
// and say is we add a key in the class
//then both objects will have that key
// Ex - class Person {
//        ...Schema,
//        new key
// }
//we're basically creating a blueprint for the objects
//and then we can create objects from that class
const p1 = new Person() //creating an object from the Person class
//p1 is an instance of the Person class
const p2 = new Person()
//Both p1 and p2 will have the same schema as the Person class
//Basically that class is a blueprint for the objects
//becomes the parent of the objects
//and the objects are the instances of that class

//what does the new keyword do?
//when using objects we use heap memory
//and when we use the new keyword, it basically allocates a new memory location in the heap memory
//and it returns that memory location's address

//p1 variable is stored inside the stack memory and it's value is a reference to the memory location in the heap memory
//and it points to the memory location in the heap memory