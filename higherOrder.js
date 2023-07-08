<<<<<<< HEAD
function sum(a,b){
    return function(c,d){
        console.log(`sum is ${a+b} and mult is ${c*d}`)
    }
}


sum(3,4)(5,6);  //1st way to call

const mult = sum(3,4);  //2nd way to call
=======
function sum(a,b){
    return function(c,d){
        console.log(`sum is ${a+b} and mult is ${c*d}`)
    }
}


sum(3,4)(5,6);  //1st way to call

const mult = sum(3,4);  //2nd way to call
>>>>>>> 3a26d14 (first try)
mult(5,6)