const person = {
    x: 10,
    firstName: 'Dhrubb',
    lastName:'Garg',
    hobbies: ['Coding','Gym'],
    isMarried:false,
    hasGf:false,
    getFullName: function(){
        return 'Dhrubb Gupta'
    },
    address: {
        hno: 1,
        street:1,
        countryCode:'IN',
        state:'PB'

    },
    hadCrush:Infinity,

}

console.log(person.x); // 10
console.log(person.firstName); // Dhrubb
console.log(person.lastName); // Garg
console.log(person) // { x: 10, firstName: 'Dhrubb', lastName: 'Garg' }
console.log(person.getFullName()); // Dhrubb Gupta
console.log(person.address); // { hno: 1, street: 1, countryCode: 'IN', state: 'PB' }
console.log(person.address.state); // PB
console.log(person.address.fffdddd); // undefined
console.log(person.hadCrush); // Infinity

//
//we're making an object here 
//here address is an object inside the person object
//why do we use objects to store data?
//because we can store multiple values in a single variable
//we can group data together
//data stored in databases is also in the form of objects

//Another Example of an object

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: { height: 1, width: 1 },
    turnOff:function(){

    },
    volumneUp: function(){

        
    }

}