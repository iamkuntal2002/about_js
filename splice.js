//delete elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // Removes elements starting from index 2: [3, 4]
console.log(numbers); // Output: [1, 2, 5]

//adding elements
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 0, 'orange', 'grape'); // Inserts elements at index 1
console.log(fruits); // Output: ['apple', 'orange', 'grape', 'banana', 'cherry']

//replacing elements
const colors = ['red', 'green', 'blue'];
colors.splice(1, 2, 'yellow', 'purple'); // Replaces 2 elements starting from index 1
console.log(colors); // Output: ['red', 'yellow', 'purple']
