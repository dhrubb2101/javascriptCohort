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