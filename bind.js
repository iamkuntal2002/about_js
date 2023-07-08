// <<<<<<< HEAD
function greet(message) {
    // console.log(`${message} ${this.name}!`);
    return this.message = (`${message} ${this.name}!`);
  }  
  const person = {
    name: 'John'
  }  
  console.log(person)
  const greetPerson = greet.bind(person);
  greetPerson('Hello');
  console.log(person)
// =======
function greet(message) {
    // console.log(`${message} ${this.name}!`);
    return this.message = (`${message} ${this.name}!`);
  }  
  const person = {
    name: 'John'
  }  
  console.log(person)
  const greetPerson = greet.bind(person);
  greetPerson('Hello');
  console.log(person)
// >>>>>>> 3a26d14 (first try)
  