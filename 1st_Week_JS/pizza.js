let numberofGuest = 8;

let pizzaSize;
//small <= 2
//medium <= 5
//large

if(numberofGuest <= 2){
    pizzaSize = "small";
    console.log(`Pizza size is ${pizzaSize}`);
}else if(numberofGuest <= 5){
    pizzaSize = "medium"
    console.log(`Pizza size is ${pizzaSize}`)
}else{
    pizzaSize ="large"
    console.log(`Pizza size is ${pizzaSize}`)
}

console.log(pizzaSize)