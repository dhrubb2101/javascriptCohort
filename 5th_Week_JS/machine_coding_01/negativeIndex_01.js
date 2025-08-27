const { negative } = require("zod");

let arr = [1,2,3,4,5,6,7,8,9,10]


console.log(arr[-1]);

const user = {
    name: "hitesh",
    age: 40,
    password: "123"
}

const proxyUser = new Proxy(user, {

    get(target, prop){
        return target[prop] //target is user object
    }
})
console.log(proxyUser.password)

//some properties we need to hide for that we use proxyObject
// proxyUser.password