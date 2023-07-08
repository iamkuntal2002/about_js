// const obj = {
//     name: 'John',
//     sayHello: () => {
//         console.log(`Hello, ${this.name}!`); // 'this' will not refer to 'obj'
//     }
// };
// obj.sayHello()  //output : Hello, undefined!


// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHello = () => {
//     console.log(`Hello, ${this.name}!`); // 'this' will not refer to the instance of Person
// };
// Person.sayHello("this")

button.addEventListener('click', () => {
    // 'this' will not refer to the button element
    console.log(`Button clicked: ${this.textContent}`);
});
