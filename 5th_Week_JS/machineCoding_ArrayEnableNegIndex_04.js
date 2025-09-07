const arr = [1,2,3,4,5,6];

function enableNegativeIndexing(targetArr){
    return new Proxy(targetArr, {
        set(target, prop, value){
            target[prop] = `${value}🌟`
        },
        get(target, prop){
            return target[prop]
        }
    })
}

const proxyArr = enableNegativeIndexing(arr);

console.log(`Original Arr`, arr);
console.log(`ProxyArr`, proxyArr);

// arr[1] = 111
proxyArr[1] = 111

console.log(`Updated Arr`, arr)
console.log(`ProxyArr Updated Arr`, proxyArr)

//here what's happening is we are creating a proxy object of the original array
//and we are intercepting the get and set methods of that array
//so whenever we do arr[1] = 111, it will call the set method of the proxy
//and we can modify the value before setting it to the original array
//similarly, whenever we do arr[1], it will call the get method of the proxy
//and we can modify the value before returning it

//so here what we did when we called the function enableNegativeIndexing we store it in a variable called proxyArr
//and whenever we do proxyArr[1] = 111, it will call the set method of the proxy
//and we are adding a star emoji to the value before setting it to the original array
//similarly, whenever we do proxyArr[1], it will call the get method of the proxy
//and we can modify the value before returning it

//and why the original array is also getting updated because we are modifying the original array in the set method of the proxy
//because as you can see the parameter passed targetArr is the address reference of the original array 
//so whenever we do target[prop] = value, we are modifying the original array
//hence both the original array and the proxy array are getting updated
