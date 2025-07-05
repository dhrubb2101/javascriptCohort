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
