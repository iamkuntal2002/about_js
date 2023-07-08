<<<<<<< HEAD
// console.log(x);  // undefined
// var x = 10;     //declaration hoisted on the top but not the initialization
// console.log(x);  // 10

// foo();  // "Hello, world!"
// function foo() {
//   console.log("Hello, world!");
// }

//in case of let and const it's different
// console.log(x,y);  
// const x = 10;     //Cannot access 'x' before initialization
// let y = 10;     //Cannot access 'x' before initialization
// console.log(x,y);  // 10


//function expression and class expression are not hoisted
// fun()   //Cannot access 'fun' before initialization
// const fun = () => {
//     console.log("hello");
// }
// // fun()       //ok

fun()       //Cannot access 'fun' before initialization
let fun = function hello(){
    console.log("hello");
}
=======
// console.log(x);  // undefined
// var x = 10;     //declaration hoisted on the top but not the initialization
// console.log(x);  // 10

// foo();  // "Hello, world!"
// function foo() {
//   console.log("Hello, world!");
// }

//in case of let and const it's different
// console.log(x,y);  
// const x = 10;     //Cannot access 'x' before initialization
// let y = 10;     //Cannot access 'x' before initialization
// console.log(x,y);  // 10


//function expression and class expression are not hoisted
// fun()   //Cannot access 'fun' before initialization
// const fun = () => {
//     console.log("hello");
// }
// // fun()       //ok

fun()       //Cannot access 'fun' before initialization
let fun = function hello(){
    console.log("hello");
}
>>>>>>> 3a26d14 (first try)
// fun()       //ok