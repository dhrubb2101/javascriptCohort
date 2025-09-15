//throttle function
//======================================================================================
// Throttling ensures a function is called at most once in a specified time period.
// It limits the rate of function execution, useful for performance optimization.

const ptaNahi = (fn, delay) => {
    let myId = null;
    return (...args) => {
        if(myId === null){
            fn(...args);
        myId = setTimeout(() => {
            myId = null;
        }, delay);
    }

    }
}
Sa
ptaNahi()
ptaNahi()
ptaNahi()
//======================================================================================

// Breaking it down

// Wrapper function
// ptaNahi takes two arguments:
// fn: the function you want to control.
// delay: how many milliseconds to wait.
// It returns a new function.

// State with myId

// myId starts as null.
// It tracks if the function is in the "cooldown" period (waiting for delay).

// Returned function
// When the returned function is called with some arguments (...args):
// If myId === null (not cooling down), it immediately calls fn(...args).
// Then it starts a setTimeout for delay ms, after which myId is reset to null.

// Effect
// While myId is not null (during the timeout), new calls will be ignored.
// Only the first call in each time window runs.

//======================================================================================

// Why if (myId === null)?
// myId is used as a flag to check if we are in the cooldown period.
// At the very beginning, myId is null, so the condition is true.

// What happens then?
// fn(...args) runs immediately → your actual function executes with the provided arguments.
// Example: if fn = sayHi and you call sayHi("A"), it prints "Hi A".
// Then you set myId = setTimeout(...).
// That means: start a timer for delay ms.
// Until that timer finishes, myId is not null anymore (it holds the timeout ID).
// So future calls will skip this block (ignore calls).
// When the timer ends, the callback runs and resets myId = null.
// Now the next call can pass the if check again, and fn can run.

//======================================================================================

// Example usage

//vahi same mother and daughter ki story but throa difference hai 
//The mother prmised the daughter that she will get a box of chocolate if she keep quiet till 3PM
//and it's 12PM now, so the daughter started asking for it at 12:30PM
//it doesn't matter she will get the chocolate at 3PM only.
//it doesn't matter how many time she she asks before 3PM she'll get the box of chocolate at3PM only that is throttle function

//======================================================================================

//an example of debounce function


function ptaNahi(fn, delay){ //these are paramters
    console.log(arguments) //this will give us the arguments object as an array like object
    let myId;
    return function(...args){ //this is the function returned by the parent function ptaNahi
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

const sachMeiNhiPta = ptaNahi(() => greet("hitesh"), 3000) //but here line 24 pr hum ek function expression de rhe hai jo abhi humme call krna hai kia ni hai abhi
// ptaNahi(greet("hitesh"), 3000) //in 25,26,27 we are calling the greet function and uska return statement hum pata ni mei daal rhe
sachMeiNhiPta()
sachMeiNhiPta()
sachMeiNhiPta()

// remove a past request => keep a reference of it
//fire a new request =>
    
//areee bhai ab samjh aaya debounce mei kya hota hai pehle ek function return hua then voh function call hua which then is supposed to run on a delay then dubaare se same function gets called again
//before the delay of first function is over so clearTimeout clears the first function who was called already and was waiting for dealy to complete gets deleted from queue remember the first function gets deleted from queue
//and then fresh function gets added to the queue and this goes on and on until the user stops calling the function for a certain delay it takes to complete that function
//that is debouncing

//userRequest() => debouncedUserrequest()
//idher ptaNahi and sachMeiNhiPta dono function isliye likhe hai 
//basically we are wrapping the userRequest function inside the debouncedUserrequest function
//so whenever we call the debouncedUserrequest function it will call the userRequest function after a certain delay
//and if we call the debouncedUserrequest function again before the delay is over it will clear the previous timeout and start a new one
//hence the userRequest function will be called only once after the user has stopped calling the debouncedUserrequest function for a certain delay

