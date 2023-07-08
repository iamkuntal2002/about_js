const obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  configurable: false
});
obj.name = "Jane"; // Ignored, no error thrown

console.log(obj.name); // Output: "John"
