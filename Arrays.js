<<<<<<< HEAD
// let arr = ["kuntal","anushree","souvik","arindam"];
// console.log(arr.length);    //return the no of elements 
// console.log(arr.push("rajdeep"));   //return the new length of the array
// console.log(arr.pop());     //popped out the last element
// console.log(arr.shift())    //remove an element from the beginning
// console.log(arr.unshift("rajdeep")) //insert an element at the front



// let arr1 = ["kuntal","anushree","souvik","arindam"];
// let arr2 = ["ankush","faisal","ishika"];
// let arr3 = arr1.concat(arr2);   //concat merge two array and return new array
// arr3.splice(2,3,"ukr","khanki","magi","chudi"); //start from 2, delete 3items,
//     // insert the specified items in that position, didn't change the original array
// let arr4 = arr3.slice(3,5);   //return a new array, didn't change the original array
// let str = arr3.toString();
// arr3.sort();    //sort lexicographically, also for numbers
// let arr6 = [11,12,4,5,2,2,4,5,67,3,3];
// arr6.sort();
// console.log(arr6)   //  11, 12, 2, 2, 3, 3, 4, 4, 5, 5, 67
// arr6.sort( (a,b) => {   //sort function can take a comparative function
//     return a-b;
// })
// console.log(arr6)   //  2, 2, 3,  3,  4, 4, 5, 5, 11, 12, 67
// arr3.reverse(); //reverse all the elements



let arr = [1,2,32,4,5,65,67,8,8,9,9,9,3,3,5,6]
arr.forEach((a) => {    //forEach calls a function(callback function)
    console.log(a)
})

let arr2 = arr.map((a) => { //crate a new array performing a function on each element
    return a*2;
})
console.log(arr2)

=======
// let arr = ["kuntal","anushree","souvik","arindam"];
// console.log(arr.length);    //return the no of elements 
// console.log(arr.push("rajdeep"));   //return the new length of the array
// console.log(arr.pop());     //popped out the last element
// console.log(arr.shift())    //remove an element from the beginning
// console.log(arr.unshift("rajdeep")) //insert an element at the front



// let arr1 = ["kuntal","anushree","souvik","arindam"];
// let arr2 = ["ankush","faisal","ishika"];
// let arr3 = arr1.concat(arr2);   //concat merge two array and return new array
// arr3.splice(2,3,"ukr","khanki","magi","chudi"); //start from 2, delete 3items,
//     // insert the specified items in that position, didn't change the original array
// let arr4 = arr3.slice(3,5);   //return a new array, didn't change the original array
// let str = arr3.toString();
// arr3.sort();    //sort lexicographically, also for numbers
// let arr6 = [11,12,4,5,2,2,4,5,67,3,3];
// arr6.sort();
// console.log(arr6)   //  11, 12, 2, 2, 3, 3, 4, 4, 5, 5, 67
// arr6.sort( (a,b) => {   //sort function can take a comparative function
//     return a-b;
// })
// console.log(arr6)   //  2, 2, 3,  3,  4, 4, 5, 5, 11, 12, 67
// arr3.reverse(); //reverse all the elements



let arr = [1,2,32,4,5,65,67,8,8,9,9,9,3,3,5,6]
arr.forEach((a) => {    //forEach calls a function(callback function)
    console.log(a)
})

let arr2 = arr.map((a) => { //crate a new array performing a function on each element
    return a*2;
})
console.log(arr2)

>>>>>>> 3a26d14 (first try)
