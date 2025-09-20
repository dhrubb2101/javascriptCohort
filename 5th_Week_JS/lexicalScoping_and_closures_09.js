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

//output
//error
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
//why 
//let's see global execution context
//it has two parts
//memory phase
//code phase
//memory phase runs first 
//In Memory phase, variables are first defined and variables are first initialized with undefined
//and function always into the memory phase with it's whole body
//so now in memory phase , until now fname is defined as undefined
//then in code phase piyush is assigned to fname
//first ine is done
//in code phase ignore the function body for now
//then comes console.log, it runs in code phase
//it looks for fname 
//which is found in memory phase
//then function gets invoked
//then see whether that function exists in memory phase
//yes it exists
//har function ka ek function execution context banta hai
//iske bi do phase hote hai
//memory phase
//code phase
//in memory phase of function execution context
//and in function we also defined a variable named fname
//which is again defined inside as undefined
//we go to code phase of function execution context
//then in code phase of function execution context
//Hitesh is assigned to fname
//then console.log runs
//it looks for fname
//it finds it in memory phase of function execution context
//now the function execution context is deleted

//also remember, hr function ka function execution context calls stack mei push hota hai

//yaha function execution context ke andar memory phase mei ek [[scope]] naam ka special cheez hota hai jiske anadr uss parent ka reference hota hai

//Consider if you don't define fname inside the function this time, can fname still exist inside the function 
//let's see
//does fname exist inside the function execution context
//no it doesn't exist
//then it looks for fname in it's [[scope]] which is the parent and parent is the one that defines the function
//that is whatever is the outer scope of the function is the parent
//and in the outer scope fname is defined
//so it finds it there
//and it prints Piyush
//now you understood
//basically if there is a inner function inside sayName() then the variables defined inside sayName() will be the parent of that inner function

//in here basically the vairable fname exist in two different scopes if it is defined within function and outsside of it and in memory phase variable can only be defined once , though it does in two different scopes
//but if it is defined only outside the function then it exists in only one scope that is global scope

//jab bhi aap ek function ke andar variable ko read krte ho 
//-to pehle voh khud ke memory phase mei check krta hai that is local 
//-then it checks in it's [[scope]] that is parent scope
//