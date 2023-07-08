<<<<<<< HEAD
function sumOfThreeElements(...elements) {
    return new Promise((resolve, reject) => {
        if (elements.length > 3 || elements.length < 3) {
            reject("Only three elements are allowed");
        }
        else {
            let sum = 0;
            let i = 0;
            while (i < elements.length) {
                sum += elements[i];
                i++;
            }
            resolve("Sum has been calculated: " + sum);
        }
    })
}
// console.log(sumOfThreeElements(1, 2, 3));   //ok
// console.log(sumOfThreeElements(1, 2));  //error
try {
    sumOfThreeElements(4, 5)
    .then(result => console.log(result))
    .catch(error => console.log(error));
}
catch(error) {
    console.log(error)
}
=======
function sumOfThreeElements(...elements) {
    return new Promise((resolve, reject) => {
        if (elements.length > 3 || elements.length < 3) {
            reject("Only three elements are allowed");
        }
        else {
            let sum = 0;
            let i = 0;
            while (i < elements.length) {
                sum += elements[i];
                i++;
            }
            resolve("Sum has been calculated: " + sum);
        }
    })
}
// console.log(sumOfThreeElements(1, 2, 3));   //ok
// console.log(sumOfThreeElements(1, 2));  //error
try {
    sumOfThreeElements(4, 5)
    .then(result => console.log(result))
    .catch(error => console.log(error));
}
catch(error) {
    console.log(error)
}
>>>>>>> 3a26d14 (first try)
