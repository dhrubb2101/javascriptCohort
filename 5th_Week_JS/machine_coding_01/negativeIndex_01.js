const { negative } = require("zod");

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr[-1]);

//===========================

const user = {
    name: "hitesh",
    age: 40,
    password: "123"
}

const proxyUser = new Proxy(user, {
    get(target, prop){

        console.log(prop)
        // if(prop === "password"){
        //     throw new Error("Access Denied")   
        // }


        return target[prop] //target is user object
    }
})
console.log(proxyUser.age)

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