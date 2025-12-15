//polyfill is something which allows for a functionallity which is not natively supported in a browser to be added to it and used
//as a developer app uss feature ko code kr do 
//to do custom implementation of built-in feature is called polyfill
//for example if we want to use array.map() in older browser which does not support it then we can create our own implementation of map function and add it to array prototype so that we can use it like a built-in function

//===========================================================================================================================================


//here we'll right polyfils of modern js features

//1. Map
//2. ForEach
//3. Promise(Very important)


//===========================================================================================================================================

//how will we know a particular feature exist or not already before building a polyfil 
//first we identify that 
//that's why we check in array.prototype if map function exist or not
//if it does not exist then we can create our own implementation of map function and add it to array prototype so that we can use it like a built-in function
//===========================================================================================================================================

//all these functionalities like map,forEach,filter are known as array.prototype methods
//because they are present in array.prototype
//all these functionalities are stored within arr at a variable called __proto__
//so browser when he sees the statement
// arr.__proto__ = Array.prototype
//so all these functionalities are present in arr.prototype are stored in arr.__proto__ variable

//===========================================================================================================================================

//that's why if the browser is updated then in browser inspect element
//if we write Array.prototype
//we can see all the functionalities which are present in array.prototype
//arr.__proto__ also gives the same result
//===========================================================================================================================================

//and now say you run below code
// arr = [1,2,3]
//arr.__proto__
//Array.prototype
// array.map(e => e*2) //[2,4,6] //it works because map function is present in array.prototype
// //array.__proto__ = null //if we do this then map function will not work
// array.map(e => e*2)  //error because map function is not present in array.prototype


//===========================================================================

if(!Array.prototype.hululu) {
    Array.prototype.hululu = function() {
        // Custom implementation of hululu
    }
}
//this is basic a polyfill of hululu function
// we first check if hululu function is already present in array.prototype or not
//if it is not present then we add our own implementation of hululu function to array.prototype
//now we can use hululu function on any array
//arr.hululu()

//===========================================================================

//shall we make a hululu property in array.prototype
//yes we can make a custom property in array.prototype

Array.prototype.hululu = function(){
    console.log("Hululu function called")
}

const nums = [1,2,3,4]

nums.hululu() //Hululu function called

//because it is present in nums.__proto__ which is same as Array.prototype
//because Array.prototype is the parent class of all the arrays

//===========================================================================

//now let's make a polyfill of forEach function

//forEach function takes a callback function as an argument

//for ex const nums = [1,2,3,4]
//nums.forEach( (currentItem, index) => console.log(currentItem, index) )
//1 0
//2 1
//3 2
//4 3

//here forEach works like a loop and iterates over each item of the array and calls the callback function with currentItem and index as arguments

//array runs user function or callback function for each item of the array
//===================

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i=0; i < this.length; i++){
            cb(this[i],i) //cb is the callback function passed by user
    }
    }
}
const arr =  [1,2,3,4]

arr.myForEach((currentItem, index) => {
    console.log(`At Index : ${index}, Value: ${currentItem}`)
})
//here as a paramter we are passing the callback function

// Why this?
// Inside your custom myForEach, this refers to the array on which the method was called.
//So when you loop with for(let i=0; i < this.length; i++), you’re iterating over the elements of the array that called myForEach
//Why function(cb)?
//cb (callback) is the function you pass when calling myForEach.
//That function is called once per element of the array, just like the native .forEach.

//===========================================================================   

//similarly we can make polyfill of map function

//map function takes a callback function as an argument and returns a new array with the results of calling the callback function on each item of the array

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(cb){
        const result = []
        for(let i = 0; i < this.length; i++){
            const value = cb(this[i], i)
            result.push(value)
        }
        return result

    }

    const trippledArray = arr.myMap((e) => e * 3)
    console.log(trippledArray) // [3,6,9,12]
}

//===========================================================================

//similarly we can make polyfill of reduce function

//reduce function takes a callback function and an initial value as arguments and returns a single value by applying the callback function on each item of the array
const res = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(res) //10

// if(!Array.prototype.myReduce){
//     Array.prototype.myReduce = function(cb){
//         let acc = this[0] //accumulator
//         for(let i = 1; i < this.length; i++){
//            acc =  cb(acc, this[i])
//         }
//         return acc
//     }

// }

// const myRes = arr.myReduce((accumulator, currentValue) => accumulator + currentValue)
// console.log({res, myRes}) //10

//===========================================================================

//say if initial value was passed

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,initialValue = undefined){
        if(!initialValue){

        let acc = this[0] //accumulator
        for(let i = 1; i < this.length; i++){ //here in for loop we use i=1 because acc is already this[0]
           acc =  cb(acc, this[i])
        }
        return acc
    }
    else{
        let acc = initialValue //accumulator
        for(let i = 0; i < this.length; i++){
           acc =  cb(acc, this[i])
        }
        return acc
    }

}

}

const myRes = arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 12)
console.log({res, myRes}) 

//===========================================================================

//to clean this code , basically code should not be repeated

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,initialValue = undefined){
        let acc = initialValue || this[0]; //this line means if initialValue is passed then acc = initialValue else acc = this[0]
        //if initialValue is passed then we start loop from i=0 else we start loop from i=1
        const startIndex = initialValue ? 0 : 1; //if initialValue is passed then startIndex = 0 else startIndex = 1
        for(let i = startIndex; i < this.length; i++){ //here in for loop we use i=1 because acc is already this[0]
           acc =  cb(acc, this[i])
        }
        return acc
    }
    

}

const myRes1 = arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 12)
console.log({res, myRes1}) //22
//===========================================================================

//to write polyfill of custom promise

function wait(seconds){
    return new Promise((resolve, reject) => { //Promise is a class because P is captial
        setTimeout(() => resolve(), seconds*1000)
    })
}

wait(10)
.then(() => console.log("Promise Resolved After 10 seconds"))
.catch(() => console.log("Promise Rejected After 10 seconds"))
.finally(() => console.log("Mei toh har baar chalunga bhai"))

//promise is a class which takes a function as an argument
//jaise he promise ka object banate ho ek executor funtion do 
//is executor function ke paas do cheezo ka access which are resolve and reject and resolve ko call krne pr:
//promise gets fulfilled  and jitene bi then functions hai voh run kr jaate hai
//and reject ko call krne pr promise reject ho jaata hai and sabhi catch function call ho jaate 
//and finally toh ahr baar krna he hai

class MyPromise {
    constructor(executor) {
        this._state = 'pending'; //initial state of promise
        this._successCallbacks = []; //to store all the then callbacks
        this._errorCallbacks = []; //to store all the catch callbacks
        this._finallyCallbacks = []; //to store all the finally callbacks
        executorFn(this.resolverFunction.bind(this),this.rejectorFunction.bind(this)) //calling the executor function with resolve and reject functions
        
    }

    then(cb){
        this._successCallbacks.push(cb)
        return this;

    }

    catch(cb){
        this._errorCallbacks.push(cb)
        return this;
    }

    finally(cb){
        this._finallyCallbacks.push(cb)
        return this;
    }

    resolverFunction(value){
        this._state = 'fulfilled'
        this._successCallbacks.forEach((cb)=> cb())
        this._finallyCallbacks.forEach((cb)=> cb())
    }

    rejectorFunction(err){
        this._state = 'rejected'
        this._errorCallbacks.forEach((cb)=> cb(err))
        this._finallyCallbacks.forEach((cb)=> cb())
    }
}


function wait(seconds){
    const p =  new Promise((resolve, reject) => { //Promise is a class because P is captial
        setTimeout(() => resolve('hahaha'), seconds*1000)
        // setTimeout(() => reject(), seconds*1000)
    })
    return p
}

wait(10)
.then((res) => console.log("Promise Resolved After 10 seconds", res))
.catch((err) => console.log("Promise Rejected After 10 seconds", err))
.finally(() => console.log("Mei toh har baar chalunga bhai"))

//===========================================================================


class MyPromise {
    constructor(executor) {
        this._state = 'pending'; //initial state of promise
        this._successCallbacks = []; //to store all the then callbacks
        this._errorCallbacks = []; //to store all the catch callbacks
        this._finallyCallbacks = []; //to store all the finally callbacks
        this.value = undefined; //to store the resolved value
        executorFn(this.resolverFunction.bind(this),this.rejectorFunction.bind(this)) //calling the executor function with resolve and reject functions
        
    }

    then(cb){
        if(this._state === 'fulfilled'){
            console.log(`Apka promise toh pehle he pura hogya, run he kr deta hu`)
            cb(this.value) //immediately call the callback function if promise is already fulfilled
        }
        this._successCallbacks.push(cb)
        return this;

    }

    catch(cb){
        if(this._state === 'rejected'){
            console.log(`Apka promise toh pehle he reject  hogya hai, run he kr deta hu`)
            cb() //immediately call the callback function if promise is already rejected
            return this;
        }
        this._errorCallbacks.push(cb)
        return this;
    }

    finally(cb){
        if(this._state !== 'pending'){
            console.log(`Apka promise toh pehle he pura/reject hogya hai, run he kr deta hu`)
            cb() //immediately call the callback function if promise is already fulfilled or rejected
            return this;
        }
        this._finallyCallbacks.push(cb)
        return this;
    }

    resolverFunction(value){
        this._state = 'fulfilled'
        console.log(`Fulfilling Promise, running ${this._successCallbacks.length} callbacks`)
        this.value = value; //store the resolved value
        this._successCallbacks.forEach((cb)=> cb())
        this._finallyCallbacks.forEach((cb)=> cb())
    }

    rejectorFunction(err){
        this._state = 'rejected'
        this._errorCallbacks.forEach((cb)=> cb(err))
        this._finallyCallbacks.forEach((cb)=> cb())
    }
}


function wait(seconds){
    const p =  new Promise((resolve, reject) => { //Promise is a class because P is captial
        resolve('hahaha')
        // setTimeout(() => resolve('hahaha'), seconds*1000)
        // setTimeout(() => reject(), seconds*1000)
    })
    return p
}

const p = wait(10)

console.log('Registering Callbacks')

p.then((res) => console.log(`V1, Promise Resolved After 10 seconds", res`))
.catch((err) => console.log(`V1, Promise Rejected After 10 seconds", err`))
.finally(() => console.log(`V1, Mei toh har baar chalunga bhai`))


p.then((res) => console.log(`V2, Promise Resolved After 10 seconds", res`))
.catch((err) => console.log(`V2, Promise Rejected After 10 seconds", err`))
.finally(() => console.log(`V2, Mei toh har baar chalunga bhai`))

//here the code will not work  
//here at line 338 promise gets resolved and at line 338 it does not have any callbacks to call because the callbacks are added after the state of the promise is changed so the callbacks are not called
//mere callback register hone se pehle he promise resolve ho gaya
//isse pehle function register ho paata unhone resolver function run kr dia and unke success callbacks khaali tha
//kyuki callbacks add hone se pehle ya callbacks register hone se pehle  hi promise resolve ho gaya
//and successcallbacks mei push kr paata usse pehle he promise got resolved

