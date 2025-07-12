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

function add(x:number,y:number){
    return `x+y`
}
//add('piyush',3)// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

function createUser(){

}

let x = add(4,3)
//x*300// Error: Type 'string' is not assignable to type 'number'.
//x.toFixed(2) //not possible since x is a string