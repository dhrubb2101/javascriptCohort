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

    }

}

console.log(person.x); // 10
console.log(person.firstName); // Dhrubb
console.log(person.lastName); // Garg
console.log(person) // { x: 10, firstName: 'Dhrubb', lastName: 'Garg' }
console.log(person.getFullName()); // Dhrubb Gupta
console.log(person.address); // { hno: 1, street: 1, countryCode: 'IN', state: 'PB' }
console.log(person.address.state); // PB
console.log(person.address.fffdddd); // undefined


//we're making an object here 
//here address is an object inside the person object
