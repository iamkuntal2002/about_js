function* numberGenerator() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}
const iterator = numberGenerator();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
