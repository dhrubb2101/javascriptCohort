let teas = ["masala","ginger","oolong","green","black","white"];

// teas[h]

teas.length // 6

let h = 5 //value of h will remain h<=5 | h<6

// loop - iteration; i
//pehla step variable lekr aao sabse pehlee
//dusra step for loop is limit btao kaha tk jaana hai
//tessra step increment or decrement => h = h+1 => h++
//koi aisa point aana chahiye jaha condition satisdy na ho
for(let h = 0; h < teas.length; h++){
    console.log(`Tea at index ${h}: ${teas[h]}`)

}