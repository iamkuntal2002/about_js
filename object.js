// method 1:
// const person = {
//     name: "John",
//     age: 30,
//     greet: function () {
//         console.log("Hello!");
//     }
// };

// method 2:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello!");
//     };
// }
// const person = new Person("John", 30);

// // method 3:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("Hello!");
//     }
// }
// const person = new Person("John", 30);

//method 4:
// const personPrototype = {
//     greet: function () {
//         console.log("Hello!");
//     }
// };
// const person = Object.create(personPrototype);
// person.name = "John";
// person.age = 30;

//method 5:
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log("Hello!");
        }
    };
}
const person = createPerson("John", 30);

