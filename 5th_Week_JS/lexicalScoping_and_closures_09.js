// let fname = "Piyush"

// function sayName(){
//     console.log(`Inside SayName Fn the value of fname is`, fname)
// }
// console.log("Value of Fname is", fname)

// sayName()

//output
//Value of Fname is Piyush
//Inside SayName Fn the value of fname is Piyush

//even though the variable is defined outside the function
//but still the function is able to access it
//why and how?
//the reason is variable outside the function is defined in global scope
//and the function is able to access the variable from global scope
//now we want to understand why it happened the inner working of it
//so we do debugging and tun the js debugger 

//=====================================================================================

// let fname = 'Piyush'

// let fname = 'Hitesh'

// console.log('Value of fname is', fname)

// //cannot [redeclare] block-scoped variable 'fname

//=====================================================================================

let fname = 'Piyush'

function sayName(){
    //fname is fn ke scope mei exist krta hai
    let fname = 'Hitesh'
    console.log('In SayName', fname) //Yes
}

console.log('Value of fname is', fname)
sayName() //Yes

//but here output is
//Value of fname is Piyush
//In SayName Hitesh
//why and how?
//why when a global variable is defined the function picks up the updated value of same variable inside the function and not the global variable 
