const { negative } = require("zod");

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr[-1]);

//===========================

const user = {
    name: "hitesh",
    age: 40,
    password: "123"
}

// const proxyUser = new Proxy(user, {
//     get(target, prop){

//         console.log(prop)
//         // if(prop === "password"){
//         //     throw new Error("Access Denied")   
//         // }


//         return target[prop] //target is user object
//     }
    // set((target, prop, value) => {
    //     if(prop === "age"){
    //         if(typeof value !== "number"){
    //             throw new Error("Age must be a number")
    //         }
    //         if(value < 0){
    //             throw new Error("Age must be a positive number")
    //         }
    //     }
    //     target[prop] = value 
    // })
// })
// console.log(proxyUser.age)

// Explanation

// set(target, prop, value) → This trap intercepts whenever you try to assign a value to a property of the proxy object.
// target → the original object being proxied (like user)
// prop → the property being set (like "age")
// value → the new value being assigned

// Inside the trap:
// It checks if the property being set is "age".
// If yes, it validates:
// Must be a number (typeof value !== "number" → error).
// Must be positive (value < 0 → error).
// If the value passes, it assigns it to the original object:
// target[prop] = value

// In this code, prop represents the property name being accessed on the proxyUser object.

// When you write:
// console.log(proxyUser.age);
// The get trap is triggered, and the prop parameter receives "age" as its value.

// So:
// If you do proxyUser.name → prop is "name".
// If you do proxyUser.password → prop is "password".
// In short, prop is a string (or symbol) that tells you which property was requested from the proxy.

//some properties we need to hide for that we use proxyObject
// proxyUser.password

//getting familiar and using get and set traps of proxy object
//===============================================

//how do we access .length property of array

//=========================================================\

function negativeIndex(arr){
    return new Proxy(arr, { //in this arr is the array we are passing and in return we ar getting a proxied array ( {} )
        get(target, prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index] //say you give index -2
            }
            return target[index]

        }

    }) 
}

//explanantion on why we can return a proxy object from a function

// A function in JavaScript can return anything — a number, string, object, function, array, or even a Proxy.
// Proxy is just another object created with new Proxy(...). So when you do:

//negativeIndexing via Proxy Array
function negativeIndex(arr){
     return new Proxy(arr, {
        get(target, prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index] //say you give index -2 
                //the logic behind this consider an array [1,2,3,4,5] and target[target.length + index] target.length is 5 and say index is -2 so 5 + (-2) = 3 so target[3] = 4
            }
            return target[index]
        },
        set(target, prop, value){
            const index = Number(prop)
            if(index < 0){
                target[target.length + index] = value

            }else{
                target[index] = value
            }
            return true; //indicates that the assignment was successful
     }
    })
};


//yaha pr negativeIndexing read krna aapne accessible kr dia hai ab next mei negativeIndexing set krna hai

// new Proxy(arr, {}) creates a Proxy object.
// That object is just like any other JS object (like {} or []).
// Since functions can return any value, you can return that Proxy.
// So the function isn’t doing anything special — it’s just returning the object that new Proxy creates.
// The reason you are able to return it is the same reason you can return, say, a plain object:
//returning here a proxied array

