// I should  have a function increment()
//on call of the function it sould increnent the number
//and return the current count 

// console.log(increment() ) //1
// console.log( increment() ) //2
// console.log( increment() ) //3
// console.log( increment() ) //4
// console.log( increment() ) //5

// let count = 0 
// function increment(){
//     count++;
//     return count;

// }

// console.log(increment() ) //1
// console.log( increment() ) //2
// console.log( increment() ) //3
// console.log( increment() ) //4
// console.log( increment() )

//===================================================

//closure funtion
function createCounter(){
    let count = 0

    //closure function(Function binded by its lexical scope)
    return function(){
        count++;
        return count;
    }
}

const x = createCounter()
const y = createCounter()
console.log(x()) //1
console.log(x()) //2
console.log(x()) //3
console.log(x()) //4
console.log(x()) //5
console.log(y()) //1
console.log(x()) //6
console.log(y()) //2
console.log(y()) //3


// What is a closure?
// A closure is when an inner function “remembers” the variables of its outer function, even after the outer function has finished running.
// So variables don’t disappear — they get “closed over” (saved in memory) along with the inner function.

// 2. In your code
// function increment(){
//     let count = 0      // outer function variable
//     return function(){ // inner function
//         count++;
//         return count;
//     }
// }


// increment() creates a new variable count = 0.
// It then returns the inner function.
// That inner function still remembers count — this is the closure.
// Even though increment() is finished, count stays alive because the inner function is still using it.

// 3. When you write:
// const x = increment()
// A new closure is created.
// Inside this closure:
// count is private to x.
// Every time you call x(), it updates its own count.

// 4. And:
// const y = increment()
// Another closure is created.
// This one has a different count, independent from x.
// So y() starts from 0 again.

// Visual way to see it:
// x → closure with count = 0 (private storage for x).
// y → closure with count = 0 (private storage for y).
// They don’t share the same variable, because each call to increment() makes a brand new closure.

// ✅ So:
// Closures let x and y each have their own memory of count, instead of all sharing one global variable.



//basically inside a closure a count is private to that function only
//here in this x and y are two different closures
//x has its own count and y has its own count
//they are not sharing the same variable
//each call to increment() makes a brand new closure
//===================================================
// My question - why on calling createCounter function we are actually calling the inner returned function
// x is not the createCounter function.

// x is the returned inner function that has access to its own private count. 
// yeah how it this if we're calling createCounter function and not the function inside it
// ChatGPT said:

// Excellent — you spotted the confusion point 👏
// Let’s untangle it carefully.

// 1. When you define createCounter
// function createCounter() {
//     let count = 0
//     return function() {
//         count++
//         return count
//     }
// }


// Outer function = createCounter.
// Inner function = function() { count++; return count; }.
// Important: the inner function is not run inside createCounter, it’s just returned.

// 2. When you call createCounter()
// const x = createCounter()
// Here’s what happens step by step:
// createCounter() executes.
// A new variable count = 0 is created.
// The inner function itself is returned (not executed yet).

// Think of it like:
// return function() { count++; return count }
// That’s literally what x receives.
// Now x is equal to that returned inner function, with its own hidden “backpack” holding count.

// 3. Why x is not createCounter
// createCounter is just the factory that builds and hands you a counter function.
// x is the actual counter function that was built.

// So:
// console.log(createCounter) // ƒ createCounter() { ... }
// console.log(x)             // ƒ () { count++; return count; }

// 4. Running the closure
// When you do:
// x() // runs the inner function


// You’re not calling createCounter again.
// You’re calling the inner function that createCounter already returned.
// That inner function reaches into its closure backpack, finds count, increments it, and returns it.

// ✅ So the key:
// Calling createCounter() gives you back the inner function.
// Calling x() runs that inner function, which still has access to count from when createCounter first ran.

//===================================================

// so if count = 0 inside createCounter and you call x() five times outside createCounter 
// where x= createCounter() then what will be the output and why

// Execution flow

// const x = createCounter()

// createCounter runs.

// let count = 0 is created.

// The inner function is returned.

// Now x holds:

// function() {
//    count++;
//    return count;
// }


// with a private count = 0 inside its closure backpack.

// First call → x()

// Looks into its closure: count = 0.

// Increments → count = 1.

// Returns 1.

// Second call → x()

// Closure still remembers count = 1.

// Increments → count = 2.

// Returns 2.

// Third call → x()

// count = 2 → increments → 3.

// Returns 3.

// Fourth call → x()

// count = 3 → increments → 4.

// Returns 4.

// Fifth call → x()

// count = 4 → increments → 5.

// Returns 5.

// ✅ Output
// 1
// 2
// 3
// 4
// 5

// 🔑 Why?

// Because the inner function (saved in x) closes over the variable count and keeps updating the same one every time you call x().