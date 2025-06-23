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
const teaTypes = {
    greenTea: {},
    blackTea: {},
    herbalTea: {}
}