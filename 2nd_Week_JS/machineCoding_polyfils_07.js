const arr = [1, 2, 3,4,5,6];

//interviewer will ask you to write a polyfil for this thing

//they can also ask in story format like 
//Error: .forEach function does not exist on arr variable

//solution is to create a polyfil for the forEach function
//so that it will work on all browsers

//when you want to write a polyfil , Real signature ko samjho 
///here it means understand forEach function
//that is input kya leta output kya deta hai, and format kya hai yeh sab
// like here for example - No return ,function let a hai as an input parameter, value , index
//it calls my function for every value


const ret = arr.forEach(function(value,index){
    console.log(`Value at Index is ${index} is ${value}`)

})

console.log(`Ret is`,ret);

//so how to create a polyfil for it
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const  originalArr = this //Current Object ki taraf point krta hai

        for(let i = 0; i< originalArr.length;i++){

        }
    }

}
