Object.prototype.chai = function() {
    console.log("chai aur code")
}
//

const tea = {
    name: "Ice tea lemon",
    type: "cool"
}

tea.chai()

const myTeas = ["lemon tea","orange tea"]
myTeas.chai() 
obj.chai()

//so here we defined a custom property chai on the prototype of object
//we are now able to access it on tea and myTeas the variables 
//because their obj/__proto__ points to the prototype of object
//and that prototype of object has the chai property defined in it

