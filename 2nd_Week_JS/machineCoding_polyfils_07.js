

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




// so how to create a polyfil for it
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const  originalArr = this; //Current Object ki taraf point krta hai

        for(let i = 0; i< originalArr.length;i++){
            userFn(originalArr[i],i)


        }
    }

}

const arr = [1, 2, 3,4,5,6];


const ret = arr.myForEach(function(value,index){
    console.log(`My forEach Value at Index is ${index} is ${value}`)

})

console.log(`Ret is`,ret);

//So what we did is we created a polyfil for the forEach function
//so that it will work on all browsers
//Basically we created a new function called myForEach
//which will take a user function as an input parameter
//and it will call that function for each element in the array      
//and it will pass the value and index as parameters to the user function
//and this will point to the current object
//which is the array on which the myForEach function is called

//Now taking another example of polyfil

//we are taking a map 
//Signature .map
// Returns a new array , Each element ke upar iterate krta hai aur 
//new array is basically jo bhi user ka function new return krta hai usse new array bana kr de deta hai

const n = arr.map((e) => e * 2) // n here would be a completely new array where all elements would be double
const n2 = arr.myMap((e) => e * 3) // n2 here would be a completely new array where all elements would be triple
console.log(n);
console.log(arr)
console.log(n2);


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = []

        for(let i = 0; i < this.length; i++){
            const value = userFn(this[i],i)
            result.push(value)

        }


        return result

    }
}
