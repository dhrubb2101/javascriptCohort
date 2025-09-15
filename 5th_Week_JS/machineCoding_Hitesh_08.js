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

