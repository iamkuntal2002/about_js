function sum(a, b) {
    console.log(this)
    // return a + b;
}
console.log(sum(1, 3))

// const sum2 = (a, b) => a + b;
const sum3 = (a, b) => {
    console.log(this);
    return a + b;
}
// console.log(sum2(1, 5))
console.log(sum3(1, 5))

// const obj = {
//     a: 2,
//     b: 3,
//     demo: function demo() {
//         console.log(this);
//     },
//     demo2: () => {
//         console.log(this)
//     }
// }
// obj.demo()  //own obj
// obj.demo2() //window/global obj
