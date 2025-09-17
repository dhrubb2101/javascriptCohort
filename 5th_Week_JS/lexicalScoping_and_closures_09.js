let fname = "Piyush"

function sayName(){
    console.log(`Inside SayName Fn the value of fname is`, fname)
}
console.log("Value of Fname is", fname)

sayName()

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