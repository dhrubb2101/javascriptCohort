// I should  have a function increment()
//on call of the function it sould increnent the number
//and return the current count 

// console.log(increment() ) //1
// console.log( increment() ) //2
// console.log( increment() ) //3
// console.log( increment() ) //4
// console.log( increment() ) //5

let count = 0 
function increment(){
    count++;
    return count;

}

console.log(increment() ) //1
console.log( increment() ) //2
console.log( increment() ) //3
console.log( increment() ) //4
console.log( increment() )

//===================================================

function increment(){
    let count = 0
    return function(){
        count++;
        return count;
    }
}

const x = increment()
const y = increment()
x() //1
x() //2
x() //3
x() //4
x() //5 
y() //1


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
