// const { negative } = require("zod");

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr[-1]);

//===========================

const user = {
    name: "hitesh",
    age: 40,
    password: "123"
}

const proxyUser = new Proxy(user, {
    get(target, prop){  //get trap - whenever we try to access any property of proxyUser object this get trap will be called
        console.log(target)
        return target[prop];
//         // if(prop === "password"){
//         //     throw new Error("Access Denied")   
        },
    });

console.log(proxyUser.age);

//         return target[prop] //target is user object & by . or [] we can access the properties of user named object
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

// function negativeIndex(arr){
//     return new Proxy(arr, { //in this arr is the array we are passing and in return we ar getting a proxied array ( {} )
//         get(target, prop){
//             const index = Number(prop)
//             if(index < 0){
//                 return target[target.length + index] //say you give index -2
//             }
//             return target[index]

//         }

//     }) 
// }

//explanantion on why we can return a proxy object from a function

// A function in JavaScript can return anything — a number, string, object, function, array, or even a Proxy.
// Proxy is just another object created with new Proxy(...). So when you do:

//negativeIndexing via Proxy Array
// function negativeIndex(arr){
//      return new Proxy(arr, {
//         get(target, prop){
//             const index = Number(prop)
//             if(index < 0){
//                 return target[target.length + index] //say you give index -2 
//                 //the logic behind this consider an array [1,2,3,4,5] and target[target.length + index] target.length is 5 and say index is -2 so 5 + (-2) = 3 so target[3] = 4
//             }
//             return target[index]
//         },
//         set(target, prop, value){
//             const index = Number(prop)
//             if(index < 0){
//                 target[target.length + index] = value

//             }else{
//                 target[index] = value
//             }
//             return true; //indicates that the assignment was successful
//      }
//     })
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = negativeIndex(arr)

// console.log(arr[-1])
// console.log(newArr[-1])
// newArr[-1] = 22
// console.log(arr)
// console.log(newArr)

// The reason arr[-1] is not working but newArr[-1] is working lies in how JavaScript arrays and objects handle property access:

// 1. Normal Array (arr)

// In JS, array indices are just object keys that look like numbers ("0", "1", …).
// When you do arr[-1], JavaScript does not treat it as an index.
// Instead, it sets/gets the property with the key "-1" (a string), not an array index.
// Since you never defined arr["-1"], arr[-1] is undefined.

// 2. Proxy-wrapped Array (newArr)

// newArr = negativeIndex(arr) creates a Proxy.
// Every get or set goes through the get / set trap you defined.
// When you call newArr[-1]:
// Proxy intercepts.
// Converts "-1" into Number(-1).
// Applies your negative indexing logic: target[target.length + index].
// So newArr[-1] → arr[arr.length - 1] → last element.

// 3. Why arr and newArr show the same after assignment

// When you do:
// newArr[-1] = 22;

// Proxy’s set trap runs.
// It modifies target[target.length - 1], i.e., the last element of the original arr.
// Since newArr is just a proxy view of arr, both point to the same underlying array.
// That’s why after assignment:

// console.log(arr)    // last element changed
// console.log(newArr) // also shows last element changed

// Both print the same updated array.

// ✅ Summary:

// arr[-1] doesn’t work → arrays don’t support negative indices by default.
// newArr[-1] works → Proxy intercepts and applies your custom negative indexing logic.
// Both arr and newArr stay in sync → because Proxy wraps the same underlying array.

//yaha pr negativeIndexing read krna aapne accessible kr dia hai ab next mei negativeIndexing set krna hai
//using set and get trap to do negative indexing first we use get to make it accessible to read the negativeIndexing and then using set to set the negative indexing.


// new Proxy(arr, {}) creates a Proxy object.
// That object is just like any other JS object (like {} or []).
// Since functions can return any value, you can return that Proxy.
// So the function isn’t doing anything special — it’s just returning the object that new Proxy creates.
// The reason you are able to return it is the same reason you can return, say, a plain object:
//returning here a proxied array


//basically yeh samnjo jb aap ek array mei value pass krte ho then hum ek value rkh do ek yeh method method hai (that is set method (get method) and and ek hai get method ki value mujhe de do array se (that is set method))
//JavaScript mein Proxy ek middleware ki tarah kaam karta hai jo array/object ke read (get) aur write (set) operations ko intercept karta hai.

// 🔹 get method (read trap) → Jab bhi aap newArr[-1] ya newArr[2] likhte ho, ye trap chalta hai aur decide karta hai ki actual value kaise deni hai.
// 🔹 set method (write trap) → Jab bhi aap newArr[-1] = 22 ya newArr[2] = 99 likhte ho, ye trap chalta hai aur decide karta hai ki value array mein kaise daalni hai.

// Matlab:

// get = "mujhe value do"
// set = "ye value rakh lo"

// Aapne bilkul sahi analogy banayi 👍 Proxy ka kaam hi yeh hota hai: normal array/object ke operations ko customize karna.

//=========

// explain the concept console.log(arr[-1]) , -1 would be passing in prop         get(target, prop){
// ChatGPT said:

// Achha, step by step samjhata hoon 👇

// Case: console.log(arr[-1])
// 1. JavaScript mein array bhi ek object hota hai
// Jab aap arr[-1] likhte ho, JS internally usse object property access ki tarah treat karta hai.
// -1 ko JS pehle " -1" string mein convert kar deta hai.
// Matlab ye ho jaata hai:
// arr["-1"]

// 2. Normal array (without Proxy)
// Normal array ke paas keys hoti hain "0", "1", "2", ... up to length-1.
// Lekin " -1" ek valid key nahi hai, toh JS undefined return karega.

// let arr = [1,2,3];
// console.log(arr[-1]); // undefined
// console.log(arr["-1"]); // undefined (same cheez)

// 3. Proxy-wrapped array

// Ab maan lo aapne Proxy lagaya hai:

// let newArr = new Proxy(arr, {
//   get(target, prop) {
//     console.log("prop mila:", prop, "type:", typeof prop);
//     const index = Number(prop);
//     if (index < 0) {
//       return target[target.length + index];
//     }
//     return target[prop];
//   }
// });


// Jab aap console.log(newArr[-1]) likhte ho:
// Proxy ka get trap trigger hota hai.
// prop ki value string " -1" hoti hai.
// Aap usse Number(prop) karte ho, jo -1 ban jaata hai.
// Condition index < 0 true ho jaati hai.
// Ab aap last element return kar dete ho.

// ✅ Summary:
// arr[-1] → Normal array: JS ise string " -1" key banata hai → koi value nahi → undefined.
// newArr[-1] → Proxy intercept karta hai, prop = "-1" milta hai, aap logic lagate ho aur correct element return karte ho.

//========
//how will you identify whether to use the get or set trap?
//if you're printing something like using console.log(), you'll use the get trap.
//if you're assigning a value like newArr[-1] = 22, you'll use the set trap.
//====================================================================================================

