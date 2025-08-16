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

let inventory = [
    { name: "widget A", stock: 30 },
    { name: "widget B", stock: 120 },
    { name: "widget C", stock: 45 },
    { name: "widget D", stock: 70 },

]

let lowStockItems = inventory.filter((item) => item.stock < 50)
console.log(lowStockItems); // Output: [{ name: "widget A", stock: 30 }, { name: "widget C", stock: 45 }]

// different methods to write the function in js
// let lowStockItems = inventory.filter((item) => (item.stock < 50))
// console.log(lowStockItems); 

// let lowStockItems = inventory.filter((item) => { 
//     return item.stock < 50 })

//=========================================================

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 30 },
    { user: "Charlie", activityCount: 25 },
    { user: "David", activityCount: 50 },
    { user: "Eve", activityCount: 60 },
]

//find most active user
//here max user is the accumulator and user is the current value
//and here reduce takes initial value as an array[0] as no initial value is specified 
//and hence here reduce is used in a very different way and hence being used very diffeerently
//reduce takes initial value as first value of array and when reduce acts as a loop, it will compare each user with the maxUser and return the user with the maximum activity count
let mostActiveUser = userActivity.reduce((maxUser, user) => 
    user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser); // Output