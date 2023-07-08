let arr1 = [1,2,3,4]
let arr2 = [5,6,7,...arr1];//[5,6,7,1,2,3,4]
let arr3 = [...arr1,...arr2]  //[1,2,3,4,5,6,7]
console.log(arr1)
console.log(arr2)
console.log(arr3)