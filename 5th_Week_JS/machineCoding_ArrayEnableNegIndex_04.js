const arr = [1,2,3,4,5,6];

function enableNegativeIndexing(targetArr){
    return new Proxy(targetArr, {
        set(target, prop, value){
            target[prop] = `${value}🌟`
        },
        get(target, prop){
            return target[prop]
        }
    })
}

const proxyArr = enableNegativeIndexing(arr);

console.log(`Original Arr`, arr);
console.log(`ProxyArr`, proxyArr);

// arr[1] = 111
proxyArr[1] = 111

console.log(`Updated Arr`, arr)
console.log(`ProxyArr Updated Arr`, proxyArr)

//here what's happening is we are creating a proxy object of the original array
//and we are intercepting the get and set methods of that array
//so whenever we do arr[1] = 111, it will call the set method of the proxy
//and we can modify the value before setting it to the original array
//similarly, whenever we do arr[1], it will call the get method of the proxy
//and we can modify the value before returning it

//so here what we did when we called the function enableNegativeIndexing we store it in a variable called proxyArr
//and whenever we do proxyArr[1] = 111, it will call the set method of the proxy
//and we are adding a star emoji to the value before setting it to the original array
//similarly, whenever we do proxyArr[1], it will call the get method of the proxy
//and we can modify the value before returning it

//and why the original array is also getting updated because we are modifying the original array in the set method of the proxy
//because as you can see the parameter passed targetArr is the address reference of the original array 
//so whenever we do target[prop] = value, we are modifying the original array
//hence both the original array and the proxy array are getting updated


//=====================================================================================

//heap memeory in play with the proxy array here

// 🔹 What’s happening with Proxy
// Proxy wrapping – enableNegativeIndexing(arr) returns a proxy object that sits in front of the original array (arr).
// Any operation on proxyArr[...] goes through the proxy handler (get or set).
// Set trap – In your code, when you do:
// proxyArr[1] = 111


// the set trap runs:

// set(target, prop, value) {
//     target[prop] = `${value}🌟`
// }


// target is the original arr (heap reference).
// So you’re mutating the original array directly, adding the 🌟.
// Get trap – When you read proxyArr[1], it goes through get, which simply returns target[prop].
// You could have added extra logic (like interpreting negative indexes) here.
// Original array updated – Since target is the same object in memory as arr, both arr and proxyArr show updates.

// 🔹 Heap memory’s role

// In JavaScript:
// Primitives (numbers, booleans, strings) live in the stack.
// Objects & arrays are stored in the heap.

// When you created:

// const arr = [1,2,3,4,5,6];


// the actual array lives in the heap, and arr just holds a reference (pointer) to that heap object.
// When you passed arr into enableNegativeIndexing(arr), the proxy received that same reference, not a copy.
// So target[prop] = value modifies the array in the heap.
// Both arr and proxyArr point to the same underlying heap object.
// That’s why the original array shows the 🌟-modified value even when you only update via proxyArr.

//=====================================================================================

// const arr = [1,2,3,4,5,6];

// function enableNegativeIndexing(targetArr){
//     return new Proxy(targetArr, {
//         set(target, prop, value){
//             target[prop] = `${value}🌟`
//         },
//         get(target, prop){
//             return target[prop]
//         }
//     })
// }

// const proxyArr = enableNegativeIndexing([...arr]); //using spread operator to create a shallow copy of the original array. Hence here the original array will not get updated
//why because here we are passing a copy of the original array to the function enableNegativeIndexing
//hence the address reference of the original array is not passed to the function
//so when we update the proxy array the original array will not get updated

// console.log(`Original Arr`, arr);
// console.log(`ProxyArr`, proxyArr);

// // arr[1] = 111
// proxyArr[1] = 111

// console.log(`Updated Arr`, arr)
// console.log(`ProxyArr Updated Arr`, proxyArr)