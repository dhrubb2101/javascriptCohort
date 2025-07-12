// function add(x,y){
//     console.log(x+y) // 5,6
// }
// function createUser(user){
//     console.log(user.firstName, user.lastName, user.emailAddress)
// }
// add(3,2)
// add(3,3)
// createUser({
//     firstName:'Piyush'
// })
//JavaScript - Looslely typed language
//Losely matlab iske andar koi type nahi hai , yeh dynamically typed hai
// let x = 10
// x = 'Piyush'
// x = true
//that's why team mei jb bi koi variable declare karte hai toh usko type nahi dete hai
//and it creates problems when working with a team
//TypeScript - is JS with types
//TypeScript is a superset of JavaScript that adds static types
//TypeScript is a strongly typed language
//Strongly matlab iske andar type hai , yeh statically typed hai
//====================================
//here you can see 'types' are not losely typed anymore 
// let x: number = 10 // Type 'number' is not assignable to type 'string'.
// let x = 30
// x = 'Piyush' // Error: Type 'string' is not assignable to type 'number'.
//=====================================
// let x: number = 10 // Type 'number' is assignable to type 'number'.
// let fname: string | null = 'piyush' // Type 'string | null' is assignable to type 'string | null'
//so 'x' wont change its type to string or boolean
// x = 'Piyush' // Error: Type 'string' is not assignable to type 'number'.
//x = 20 // This is fine, as 'x' is still a number
//x=true // Error: Type 'boolean' is not assignable to type 'number'.
//fname can be string or null
//fname = 'Piyush' // This is fine, as 'fname' can be a
// fname = null // This is also fine, as 'fname' can be null
//fname = true // Error: Type 'boolean' is not assignable to type 'string | null'.
//Typescript basically enforces the type of variable to be same as declared
//this is all that is typescript rest is same as javascript
//=====================================
function add(x, y) {
    return x + y;
}
//add('piyush',3)// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
function createUser(user) {
    var _a;
    if (!user.lastName)
        return;
    var trimmedLastName = ((_a = user.lastName) === null || _a === void 0 ? void 0 : _a.trim()) || '';
}
createUser({
    firstName: "piyush",
    lastName: "dhrurb",
});
var x = add(4, 3);
//is user an object or a type?
//User is a type, it is an interface that defines the structure of an object
//interface is basically a blueprint for an object
//it defines the structure of an object 
//and it can be used to create objects of that type
//Basically creating a custom blueprint for an object using interface keyword
function updateUser(user) {
    user;
}
var payload = {
    firstName: '',
    email: ''
};
updateUser(payload);
//In the above code, we have defined a type 'User' using an interface
//and we have used that type to create an object 'payload'
//and we have used that object to call the function 'updateUser'
//======================================
//Explaining the basics: 
function doSomething(x) {
}
doSomething(4); // This is fine, as 'x' is a number
var num = 10; // This is fine, as 'num' is a number
doSomething(num); // This is also fine, as 'num' is a number
//basically explaining the above code
//======================================
//command to install typescript globally 
//npm i typescript -g //for windows
//puri machine pe install karna hai
//tsc --version //to check the version of typescript installed
//if you're on linux or mac, you might need to use sudo before the command
