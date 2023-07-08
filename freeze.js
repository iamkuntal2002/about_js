const obj = { name: "John", age: 30 };
Object.freeze(obj);
obj.name = "Jane"; // Ignored in strict mode, no error thrown
obj.address = "123 Street"; // Ignored in strict mode, no error thrown
console.log(obj); // Output: { name: "John", age: 30 }
