//learning array and looping
let myArray = [1,4,2,3,5,6]
let anotherArray = []

function sumfac(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i]
    }
    //dry run
    //0
    //0 is exisiting value of sum
    //sum = 0 + 1
    //1 is new value of sum
    //sum = 1 + 4
    //5 is new value of sum
    //sum = 5 + 2
    //7 is new value of sum
    //sum = 7 + 3
    //10 is new value of sum
    //sum = 10 + 5
    //15 is new value of sum
    //sum = 15 + 6
    //21 is new value of sum

    return sum;
}

let result = sumfac(myArray); //21
console.log(result); //21

let anotherResult = sumfac([3,3,2,6,4]);
console.log(`My result is ${anotherResult}`)