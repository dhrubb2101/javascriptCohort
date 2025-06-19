let p1 ={
    fname:'Hitesh'
}

let p2 = p1

p2.fname = 'Piyush'

console.log(p2); // Piyush
console.log(p1); // Piyush

//when we assign p1 to p2, we are not creating a new object, we are just creating a reference to the same object
//so when we change p2, it also changes p1

//variable is a memory location that stores a value 
//In any language there are two ways to store data in memory
//that is one is stack memory and the other is heap memory
//in stack memory, for ex you're in a wedding there are a lot of plates there and consider a stack of plates 
//and you take a plate from the top of the stack, so you can only access the top plate
//so when do this like const fname = 'Piyush
// it stores it in stack memory, 
// and similarly however many variables we create, it will keep adding to the stack memory
//andw hen once there scope is over, it will remove the variables from the stack memory
//here there's a problem with stack memory is that it can't grow  and it can't grow dynamically
//so where you need memory that can grow dynamically, we use heap memory
//in a heap, you can store anything and also remove anything or return anything
// so in this case, 
//const fname = 'Piyush
//const p2 = fname
//both gets stored in stack memory, '=' sign does is copy whatever is on RHS and store it in the LHS
//now what happens we put the object in the heap memory and then put it's memory location in the stack memory
//which points to it's location in heap memory. this is what's called a pointer which is basically a reference to where the value is actually present it does not have a value of its own
//so when let p2=p1 
//both p2 & p1 are using the same memory but are having two different pointers
//so when we make a change in p2 , it will also change p1
//then why not we keep everything in heap memory because the read and write operations in heap memory are slower than stack memory
//so we keep the variables in stack memory and the objects in heap memory
//so we store the primitive data types like numbers, strings, booleans, null, undefined, and symbols in stack memory
//and we store the objects, arrays, and heap,graph and tree in heap memory
//and there pointer is stored in stack memory because whenever you try to access a variable, it first checks in the stack memory and then goes to the heap memory to get the value
//so the tradeoff is that if you put anything in stack memory, it can't grow dynamically but the read operation is very fast
//but if you put it in heap memory, it can grow dynamically but the read operation is slow


//if you put anything in stack the tradeoff is it can't grow but the variables will be instantly available the read operation is very fast
//but if we keep it in a pointer in stack the read operation becomes slow but the tradeoff is you get a dynamic memory

//now if we remove both p1 and p2 from stack memory, the object in heap memory will still be there
//so to remove the object from heap memory, we need to remove all the references to it that is we have to also the memory allocated for it in heap memory
//

//now consider a object , it can grow dynamically so can we keep it in heap memory
//as object grow dynamically or can be changed dynamically, so we store it in heap memory

//here's what we first did we assigned p1 to p2, so both p1 and p2 are pointing to the same memory location then
//we changed the value of p2, so now both p1 and p2 are pointing to the same memory location with the new value

//Garbage Collector 
//when we remove p1 and p2 from stack memory, the garbage collector automatically removes the object from heap memory if there are no references to it
//if there is no garbage collector then you have to clear the memory of p2 by yourself
//you have functions for it

//memory leak
//say two developers are working on the same project and they create variable p1 and p2 and when they remove the memory location of one variable say p2
//they forget that another variable p1 is still pointing to the same memory location and hence when p2 tries to clear the memory location , it creates a memory leak
