let chaiTypes = ["Masala Chai", "Ginger Chai","Green Chai" ,"Lemon Chai"];

console.log(chaiTypes[2]);
console.log(chaiTypes[3]);

//========================================================

console.log(`Total chai Types: ${chaiTypes.length}`)
console.log(`All Chai Types : ${chaiTypes.length}`)

chaiTypes.push("Herbal Tea") // adds item to end
chaiTypes.push("Black Tea") // add item to end 

console.log(chaiTypes)

const data = chaiTypes.pop() //removes last item and returns it

console.log(data)   // Output: "Herbal Tea"

let index = chaiTypes.indexOf("Ginger Chai"); // output: 2
console.log(index)
let indexChai = chaiTypes.indexOf("Lemon Chai")
console.log(indexChai)

//========================================================

if(index !== -1) {
    chaiTypes.splice(index, 1); // removes "Lemon Chai" from the array
}
console.log(chaiTypes); // Output: ['Masala Chai','Ginger Chai','Green Chai','Lemon Chai', 'Herbal Tea']

chaiTypes.splice(index, 1)

// splice(start, deleteCount) changes the original array.
// start = index → the found position.
// deleteCount = 1 → remove 1 element.
// Effect: Removes the first matching item from the array safely.

//========================================================

//Array and using loops on it(very common in JS)

chaiTypes.forEach((chai, index) => {
    console.log(`${index + 1}: ${chai}`)
})

//================================

//how to merge two arrays
let moreChaiTypes = ["Oolong Tea", "White Tea"]

let allChaiTypes = chaiTypes.concat(moreChaiTypes)

let newChaiTypes = [...chaiTypes, "Chamomile Tea"] //spread operator basically spreads the elements of the array chaiTypes and adds "Chamomile Tea" to the end
console.log(allChaiTypes); // Output: ["Masala Chai", "Ginger Chai", "Lemon Chai", "Oolong Tea", "White Tea"]
console.log(newChaiTypes); // Output: ["Masala Chai", "Ginger

//=========================================================

//object literals

let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        spices: ["DaalChini","Ginger"]
    },
    instruction:"Boil water,add tea leaves,milk, sugar and spices"
}

console.log(chaiRecipe.ingredients.spices[1])

let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction:"Boil water,add tea leaves,milk,sugar,spices with some love",

}

console.log(updatedChaiRecipe)

//The ...chaiRecipe copies all properties, and the instruction key is overridden with the new string.

let {name,myingredients} = chaiRecipe; //destructuring the object
let [firstChai, secondChai] = chaiTypes //destructuring the array

//these all fours are variables
//console.log(ingredients)// Output: { teaLeaves: 'Assam Tea', milk: 'Full Cream Milk', spices: [ 'DaalChini', 'Ginger' ] }
console.log(secondChai) // Output: "Ginger Chai"
console.log(name) // Output: "Masala Chai"
console.log(firstChai) // Output: "Masala Chai"
console.log(myingredients) // Output: { teaLeaves: 'Assam Tea', milk: 'Full Cream Milk', spices: [ 'DaalChini', 'Ginger' ] }
//=========================================================

//data gets done here 
//we understand datatypes now
