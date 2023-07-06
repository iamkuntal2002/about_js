function changeProperty(obj) {
    obj.name = 'John'; // Modifying the underlying object
}
let person = { name: 'Alice' };
changeProperty(person);
console.log(person.name); // Output: 'John' (the original object is modified)
