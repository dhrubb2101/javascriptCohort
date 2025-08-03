//Problem : Create an object representing a type of tea with properties for name,type,
//and caffeine content

const teas = {
    name: "Lemon Tea",
    type: "Green",
    Caffeine: "low"
}

// Problem : Access and print the name and type properties of the tea object.

console.log(`Tea Name is : ${teas.name} and the type of tea is : ${teas.type}`);
console.log(teas.name);
console.log(teas["type"]);

//Problem: Add a new property namely origin to the tea object.
teas.origin = "China";

//Problem: Change the caffeine level of the object to "Medium"
teas.Caffeine = "Medium";

//Problem: Remove the type property from the tea object.
delete teas.type;

//Problem: Check if the tea object has a property origin.
console.log("origin" in teas)

//Problem: Use a for...in loop to print all properties of the tea object.
for(let key in teas){
    console.log(key + ": " + teas[key])
}

//Problem: Created a nested onject representing different types of teas and their properties 
// const teaTypes = {
//     greenTea: {
//         name: "Green Tea",
//         caffeine: "Low",
//         origin: "China"
//     },
//     blackTea: {
//         name: "Black Tea",
//         caffeine: "High",
//         origin: "India"
//     },
//     herbalTea: {
//         name: "Herbal Tea",
//         caffeine: "None",
//         origin: "Egypt"
//     }
// }

//Problem: Create a copy of the tea object 
// const teaCopy = {...teas} //It is a shallow copy becuase it copies the first level of object, it does not cover a nested object.
// const anotherCopy = teas // It's a reference to the memory location same as teas , it is not a deep or a shallow copy at all
//Problem: Add a custom method describe to the tea object that returns a description string

//Problem: Merge two objects representing different teas into one.

//how to verify if a method like spread operator that an object is a shallow copy 
//or deep copy how to verify it
//Ans : you can validate it by changing the values you enter
//if the values in nested object change then it is a shallow copy and
//and if it does not then it is a deep copy
//Another Example

const myTeas = {
    greenTea: {
        name: "Green Tea",
        cups:{
            one:"1",
            two:"2",
        },
        blackTea:{
            name:"Black Tea"
        }
    }
}

//Problem: Create a copy of the tea object.
const teaCopy = {...myTeas}// shallow copy 
const anotherCopy = myTeas //reference

//To test it whether it is a shallow copy or deep copy
teaCopy.greenTea.cups.one = 4
console.log(myTeas)
console.log(teaCopy)
//so this teaCopy is a shallow copy as nested object changes as we change it
//from 1 to 4
