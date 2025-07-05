const { IterableDiffers } = require("@angular/core");

class Person {
    constructor(fname, lname){
        this.fname = fname,
        this.lname = lname
    }
    getFullname(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person("Piyush", "Garg");
const p2 = new Person("Akash", "Kadlag");

console.log(p1.getFullname()); // Piyush Garg
console.log(p2.getFullname()); // Akash Kadlag

//class is a blueprint and class ke aap objects construct kr sakta hu
//class ke objects construct krme ke liye humme ek constructor chahiye hota like for a house
//renovator needs a contrator . 

//bina constructor ke humme class ka object construct nahi kar sakte
//if you don't have a constructor, you cannot create an object of that class
//if there's no constructor present, the language will create a default constructor for you

//Parameterized constructor


//ex - class person{
//  constructor(pehlaName) {
//   this.xyz = pehlaName; //xyz is a property that can be used by p object 


//  }}
// const p = new person('Piyush)


//whenever you create an object of a class, the constructor is called automatically
//for ex whenever you line this right const p = new Person() where an object is being created the constructor gets called automatically.
//and In a parameterized constructor, you can pass parameters to the constructor
//and you pass the paramaeter to the object

//so for xyz property we have defined only object P could access and parameter is passed 
//which would be 'Piyush' in this case
