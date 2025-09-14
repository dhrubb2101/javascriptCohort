//debounce concept
//debounce is a technique to limit the rate at which a function can fire
//it will fire the function after a certain amount of time has passed since the last time it was invoked
//it is used to improve the performance of a function that is called frequently
//for example, when a user is typing in a search box, we don't want to send a request to the server for every keystroke, instead we want to wait until the user has stopped typing for a certain amount of time before sending the request

function ptaNahi(fn, delay){ //these are paramters
    console.log(arguments) //this will give us the arguments object as an array like object
    let myId;
    return function(){
        clearTimeout(myId); //this will clear the previous setTimeout function if it is not executed yet    
        myId = setTimeout((...args) => { //we give reference to this particular setTimeout function, as there can be multiple setTimeout functions
            //or you want to stop a particular setTimeout function in between , so that's why we give reference to it by storing it in a variable
            fn.bind(this, args)
        }, delay);

    }
}

function greet(name){
    console.log(`Hello ${name}`)
}

ptaNahi(greet("hitesh"), 3)
ptaNahi(greet("hitesh"), 3)
ptaNahi(greet("hitesh"), 3)
ptaNahi(greet("hitesh"), 3)


//this ptaNahi function is a higher order function because it returns a function
//            fn.bind(this, args)
//this bind method is used to bind the function to a particular context
//here we are binding the function fn to the context of this and passing the arguments args to it
//so when we call the function returned by ptaNahi, it will call the function fn with the arguments args and the context of this
//and context this contains the context of the function returned by ptaNahi

//and yeh arguments array jo hai yeh bhi neeche mentioned fn ko dena chahta hu
//kyu ki yeh saare arguments bhi fn ko jaane chahiye
// and we pass the arguments to the setTimeout function using the rest operator ...args
//and by context of this we mean the context of the function returned by ptaNahi
//that is console.log(arguments) wala function

//and this args is the copy of the arguments passed to the function returned by ptaNahi namely used in console.log(arguments) here argument is originals object

//=====================================================================================

//parent function ptaNahi mei usmei humne ek function aur saath he saath kitna delay chahiye yeh dono parameters paas kiye h
//then we created a variable myId to store the reference of the setTimeout function
//then we returned a function from the parent function ptaNahi
//jismei humne parent function ke arguments ki reference copy paas krayi
//then in setTimeout function we passed a callback function where we used bind method to bind the function fn to the context of this and passing the arguments args to it
//and we passed the delay to the setTimeout function

//=====================================================================================

// call → calls the function immediately with a specific context and arguments.
// apply → same as call, but arguments are passed as an array (or array-like object).
// bind → doesn’t call immediately, instead returns a new function with this and optional arguments pre-set.

// The arguments object is array-like (not a real array), so if you want to use it with apply, it works fine.
// In your code, you wrote “bind returns a particular function and we provide it with context” → correct, but add that you still need to call that returned function later.