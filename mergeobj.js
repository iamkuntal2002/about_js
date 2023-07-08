function mergeObjects(source, target) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === "object" && !Array.isArray(source[key])) {
                if (!target.hasOwnProperty(key) || typeof target[key] !== "object") {
                    target[key] = {};
                }
                mergeObjects(source[key], target[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
  // Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
