const { check } = require("zod");

function prepareChai(type){

    if(type === "Masala Chai"){
        console.log("Adding spices to the chai")
    }else{
        console.log("Preparing regular chai")
    }
}
//basic syntax for funtion declaration
//it is a factory where some work tak place

prepareChai("Masala Chai")  // Output: "Adding spices to the chai"
prepareChai("Green Chai")  // Output: "Preparing regular chai"

//to make it production this small program 
//we first see if type is string or not 
//then if it is string do we want it uppercase or lowercase
//========================================================

/*
Ek online store mein, agar customer ka total amount 1000 se zyada hai,
toh 10% discount milta hai. Nahi toh , full amount pay krna padhta hai.

*/
function calculateDiscount(totalAmount){
    //convert to number 
    totalAmount = Number(totalAmount);
    if( totalAmount > 1000){
        return totalAmount * 0.9
    }else{
        return totalAmount
    }
}

//calculateDiscount(totalAmount) // Output: 1080 (10% discount applied)
let finalBill = console.log(calculateDiscount("1200")) // Output: 1080 (10% discount applied, string input converted to number)

//when using function calculateTotal(amount) ,
//totalAmount here is parameter jo function ke andar use hota hai
//calculateTotal("1200") // it is an argument jo function ke bahar se pass hota hai

//whereever in a function we use return statement, it will return the value and hence comes out of the function


//========================================================

/*

Ek traffic light system mei, adar light "red" hai toh "Stop" print kro. Agar "Yellow"
 hai, toh "Slow down" print kro. Agar "Green" hai, toh "Go" print kro.

*/

function trafficLight(color){
    if(color === "red"){
        return "Stop"
    }else if(color === "yellow"){
        return "Slow down"
    }else if(color === "green"){
        return "Go"
    }
}

function trafficLight(color){
    switch(color){
        case "red":
            return "Stop";
        case "yellow":
            return "Slow down";
        case "green":
            return "Go";
        default:
            return "Invalid color";
    }
}

console.log(trafficLight("red")); // Output: "Stop"

//========================================================

//another challenge 

function checktruthyvalue(value){
    if(value){
        console.log("Truthy")
    }else{
        console.log("Falsy")
    }
}

checktruthyvalue(1); // Output: "Truthy"
checktruthyvalue(0); // Output: "Falsy"
checktruthyvalue("Hitesh"); // Output: "Truthy"
checktruthyvalue(""); // Output: "Falsy"
checktruthyvalue(null); // Output: "Falsy"
checktruthyvalue(undefined); // Output: "Falsy"
checktruthyvalue([]); // Output: "Truthy"
checktruthyvalue({}); // Output: "Truthy"
checktruthyvalue(NaN); // Output: "Falsy"
checktruthyvalue([1,2,3]); // Output: "Truthy" (non-empty string is truthy)