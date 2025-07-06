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
