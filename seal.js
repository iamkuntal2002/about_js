const obj = { name: "John", age: 30 };
Object.seal(obj);
obj.name = "Jane"; // Allowed
obj.address = "123 Street"; // Ignored in strict mode, no error thrown
console.log(obj); // Output: { name: "Jane", age: 30 }
