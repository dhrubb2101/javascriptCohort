let chaiTypes = ["Masala Chai", "Ginger Chai","Green Chai" ,"Lemon Chai"];

console.log(chaiTypes[2]);

//========================================================

console.log(`Total chai Types: ${chaiTypes.length}`)

chaiTypes.push("Herbal Tea") // adds item to end

const data = chaiTypes.pop() //removes last item and returns it

console.log(data)   // Output: "Herbal Tea"

let index = chaiTypes.indexOf("Green-Chai"); // output: 2
console.log(index)

//========================================================

if(index !== -1) {
    chaiTypes.splice(index, 1); // removes "Green Chai" from the array
}
console.log(chaiTypes); // Output: ["Masala Chai", "Ginger Chai", "Lemon Chai"]

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