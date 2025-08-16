//reduce 

let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphone", price: 150 },
    { product: "Keyboard", price: 80 },
];

//let totalSales = salesData.reduce(()=>{})
//here when we use this (()=>{}) we always need to return something
//here if we use this instead (()=>()) we don't need to return anything in this

let initialValue 
let totalSales = salesData.reduce((acc,sale)=>acc + sale.price,0)
console.log(totalSales); // Output: 2230

//basically in reduce method what is happening is 
//this is the callback (acc,sale)=>acc + sale.price
//and there is an accumulator which takes initial value which is specified as 0
//and since reduce is basically a loop, it will iterate over each element in the array
//and it will add the price of each sale to the accumulator
//and finally it will return the total sales
//which is done by using sale.price as price is property of the object specified inside the array

//========================================================

