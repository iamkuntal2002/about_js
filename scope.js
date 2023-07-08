<<<<<<< HEAD
// var a = 10  //global scope
// console.log(a)
// function sum(){
//     var b = 20  //function/local scope
//     console.log(a)  //accessed
//     console.log(b)  //accessed
// }
// {
//     let c = 30;    //block scope
//     var d = 40;     //global scope
//     console.log(c);    //accessed
// }
// // console.log(b)  //not accessed
// console.log(d)  //accessed
// sum()


const globalVariable = 'global';
function outerFunction() {
  const outerVariable = 'outer';
  function innerFunction() {
    const innerVariable = 'inner';
    console.log(innerVariable);      // Output: inner
    console.log(outerVariable);      // Output: outer
    console.log(globalVariable);     // Output: global
  }
  innerFunction();
}
outerFunction();
=======
// var a = 10  //global scope
// console.log(a)
// function sum(){
//     var b = 20  //function/local scope
//     console.log(a)  //accessed
//     console.log(b)  //accessed
// }
// {
//     let c = 30;    //block scope
//     var d = 40;     //global scope
//     console.log(c);    //accessed
// }
// // console.log(b)  //not accessed
// console.log(d)  //accessed
// sum()


const globalVariable = 'global';
function outerFunction() {
  const outerVariable = 'outer';
  function innerFunction() {
    const innerVariable = 'inner';
    console.log(innerVariable);      // Output: inner
    console.log(outerVariable);      // Output: outer
    console.log(globalVariable);     // Output: global
  }
  innerFunction();
}
outerFunction();
>>>>>>> 3a26d14 (first try)
