//Problem: create an array containing different types of teas
let teas = ["Masala","Ginger","Oolong","Green","Black","white"]
console.log(teas)

//Problem: Add "Chamomile tea" to the existing list of teas
teas.push("Chamomile tea")
console.log(teas);

//Problem: Remove "Oolong Tea" from the list of teas 
const index = teas.indexOf("Oolong")
if(index > -1) {
    teas.splice(index,1)
}
// teas.pop("Oolong")
// console.log(teas);

//Problem: Filter the list to only include teas that are caffeinated //doubt
teas.filter(tea => tea !== "Masala" && tea !== "Ginger" && tea !== "Black" && tea !== "Green" && tea !== "White")

//Problem: Sort the list of teas in alphabetical order 
teas.sort()
console.log(teas)

//Problem: Use a for loop to print each type of tea in the array
for(let i=0; i < teas.length;i++){
    console.log(`Tea at index ${i} is ${teas[i]}`)
}

// Problem: Use a for loop to count how many teas are caffeinated(excluding "Herbal Tea")
let caffeinatedMyTeas = 0
for(let i =0; i< teas.length;i++){
    if(teas[i] !== "Ginger") {
        caffeinatedMyTeas++;
    }
}

// Problem: Use a for loop to create a new array with all tea names in uppercase
const uppercaseTeas = []
for(let i=0;i<teas.length;i++){
    uppercaseTeas.push(teas[i].toUpperCase)
}

//Problem : Use a for loop to find the tea name with the most characters. 
let longestTeaName =""
for(let i =0; i< teas.length;i++){
      if(teas[i].length > longestTeaName.length){
        longestTeaName = tea[i]

      }
}

// Problem : Use a for loop to reverse the order of teas in the array
const reversedArray = []
for(let i=teas.length-1; i>=0;i--){
    reversedArray.push(teas[i])
}