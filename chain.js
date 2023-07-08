function sum(a) {
    let currentSum = a;
    function addNext(b) {
        currentSum += b;
        return addNext;
    }
    addNext.valueOf = function () {
        return currentSum;
    };
    return addNext;
}
// Usage example:
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8).valueOf()); // Output: 36
console.log(sum(10)(20)(30).valueOf()); // Output: 60
