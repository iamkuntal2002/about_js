// const num = 42;
// console.log(typeof num); // Output: "number"
// const str = "Hello";
// console.log(typeof str); // Output: "string"
// const arr = [1, 2, 3];
// console.log(typeof arr); // Output: "object"
// const func = () => {};
// console.log(typeof func); // Output: "function"
// const obj = { key: "value" };
// console.log(typeof obj); // Output: "object"
// const nullValue = null;
// console.log(typeof nullValue); // Output: "object" (quirk)


class Person {}
const person = new Person();
console.log(person instanceof Person); // Output: true
const array = [1, 2, 3];
console.log(array instanceof Array); // Output: true

const date = new Date();
console.log(date instanceof Date); // Output: true

const str = "Hello";
console.log(str instanceof String); // Output: false (string primitives are not instances of String object)

const num = 42;
console.log(num instanceof Number); // Output: false (number primitives are not instances of Number object)
