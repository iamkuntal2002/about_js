function isArray(obj) {
    return (
      obj !== null &&
      typeof obj !== "undefined" &&
      typeof obj.length === "number" &&
      typeof obj.push === "function" &&
      typeof obj.pop === "function"
      // Add other necessary array-like properties and methods here
    );
  }
  console.log(isArray([])); // Output: true
  console.log(isArray({})); // Output: false
  
  console.log(isArray([1, 2, 3])); // Output: true
  console.log(isArray("string")); // Output: false
  console.log(isArray(123)); // Output: false
  