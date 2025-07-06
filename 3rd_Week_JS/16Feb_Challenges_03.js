Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
}
//this.name hai na yeh name actually btata hai function ka namam jisne bulaya tha
//yaha par name jo hai voh basically uss function ka naam hai jisne bulaya hai
//this keyword hamesha context samjhta hai hamesha , ki kiske context mei baat kr rha hota hu


function masalaChai(){}
function gingerChai(){}



function greet(name){
    return `Hello, ${name}` //yaha jo name hai voh parameter h

}

greet.describe(); // Function name is greet
masalaChai.describe() //basically describe is calling the function name

//greet.describe('Hitesh') //'Hitesh' is an Argument not a parameter


//Another Problem(And exmaple  to check just the tech-jargon)

function add(a,b){
    return a+b
}  //this is known as function declaration

const substract = function(a,b){

} //this is known as function expression

const multiply = (a,b) => a*b //this is known as arrow function


function applyOperation(a,b,operation){
    return operation(a,b)
}

const result =  applyOperation(5,4,(x,y)=> x/y)
//in this what is happening is it's a normal function declaration 
//with three parameters and it basically takes a function with two parameters
//and what values are applied in that function are x and y
//and it returns the result of that function

function createCounter(){


    let count = 0
    return function(){  //This is tiffin concept basically in the parent function we have a variable count
        //and we are returning a function which is a closure    
        //and this closure has access to the count variable
        //and it can modify the count variable
        count ++; 
        return count
    }

}
//console.log(count)//not accesssible




function onef(){
    let myName = "hitesh"
}

console.log(myName)

(function(){
    console.log("Hitesh")
})

()// Immediately Invoked Function Expression (IIFE)
//this is a function that is executed immediately after it is defined   
//and it is used to create a private scope for the variables and functions defined inside it
//and it is used to avoid polluting the global scope with variables and functions