<<<<<<< HEAD
// function divideByHalf(sum) {
//     console.log(Math.floor(sum / 2));
// }
// function multiplyBy2(sum) {
//     console.log(sum * 2);
// }
// function operationOnSum(num1, num2, operation) {
//     var sum = num1 + num2;
//     operation(sum);
// }
// operationOnSum(3, 3, divideByHalf); // Outputs 3



function fetchData(callback) {
    // Simulating an asynchronous operation
    console.log("start");
    setTimeout(function () {
        const data = 'Some data retrieved from an API';
        callback(data); // Calling the callback function with the retrieved data
    }, 2000); // Simulating a delay of 2 seconds
    console.log("end");
}

function processReceivedData(data) {
    console.log('Processing the received data:', data);
    // Perform further operations with the received data
}

fetchData(processReceivedData); // Pass the callback function as an argument
=======
// function divideByHalf(sum) {
//     console.log(Math.floor(sum / 2));
// }
// function multiplyBy2(sum) {
//     console.log(sum * 2);
// }
// function operationOnSum(num1, num2, operation) {
//     var sum = num1 + num2;
//     operation(sum);
// }
// operationOnSum(3, 3, divideByHalf); // Outputs 3



function fetchData(callback) {
    // Simulating an asynchronous operation
    console.log("start");
    setTimeout(function () {
        const data = 'Some data retrieved from an API';
        callback(data); // Calling the callback function with the retrieved data
    }, 2000); // Simulating a delay of 2 seconds
    console.log("end");
}

function processReceivedData(data) {
    console.log('Processing the received data:', data);
    // Perform further operations with the received data
}

fetchData(processReceivedData); // Pass the callback function as an argument
>>>>>>> 3a26d14 (first try)
