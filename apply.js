
function hello(message1,message2,message3) {
    // console.log(`${message1} ${message2} ${message3} ${this.name}`)
    return this.message = (`${message1} ${message2} ${message3} ${this.name}`)
}
const person = {
    name: 'John'
};
console.log(person)
hello.apply(person, ['Hello','hi','bye']);
console.log(person)