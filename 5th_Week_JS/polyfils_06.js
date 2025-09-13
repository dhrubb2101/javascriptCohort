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

//how will we know a paerticular feature exist or not already before building a polyfil 
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

arr.myForEach()

// Why this?
// Inside your custom myForEach, this refers to the array on which the method was called.
//So when you loop with for(let i=0; i < this.length; i++), you’re iterating over the elements of the array that called myForEach
//Why function(cb)?
//cb (callback) is the function you pass when calling myForEach.
//That function is called once per element of the array, just like the native .forEach.

//===========================================================================   


