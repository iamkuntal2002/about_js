<<<<<<< HEAD
// "use strict"

// console.log(this); //window object
// function fun(){
//     console.log(this);   //window
// }
// fun();


// const obj = {
//     firstName : "kuntal",
//     lastName : "das",
//     sum  : function sum(){
//         console.log(this.firstName)   //own object
//     },
//     div : function(){
//         () => {
//             console.log(this.firstName);
//         }
//     }
// }
// // obj.sum()
// obj.div()




const obj2 = {
    first :function fun(){
        console.log(this);  //refers the own object
    },
    second: () =>{
        console.log(this)   //refers the global(window) object
    },
}
obj2.first()
=======
// "use strict"

// console.log(this); //window object
// function fun(){
//     console.log(this);   //window
// }
// fun();


// const obj = {
//     firstName : "kuntal",
//     lastName : "das",
//     sum  : function sum(){
//         console.log(this.firstName)   //own object
//     },
//     div : function(){
//         () => {
//             console.log(this.firstName);
//         }
//     }
// }
// // obj.sum()
// obj.div()




const obj2 = {
    first :function fun(){
        console.log(this);  //refers the own object
    },
    second: () =>{
        console.log(this)   //refers the global(window) object
    },
}
obj2.first()
>>>>>>> 3a26d14 (first try)
obj2.second()