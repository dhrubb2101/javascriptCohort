//  A >= 90 //if grades are above or equal to 90, then A
//  B >= 80 //if grades are above or equal to 80, then B    
//  C >= 70 //if grades are above or equal to 70, then C
//  D >= 60 //if grades are above or equal to 60, then D
//  F - Fail

function gradCalc(score){
    if(score >= 90){
        // console.log(`Your score is ${score}`)
        return "A";
    }else if(score >= 80){
        // console.log(`Your score is ${score}`)
        return "B";
    }else if(score >= 70){
        // console.log(`Your score is ${score}`)
        return "C";
    }else if(score>= 60){
        // console.log(`Your score is ${score}`)
        return "D";
    }else{
        return "F"
    }
}

let grade = gradCalc(44); // "A"
console.log(grade)