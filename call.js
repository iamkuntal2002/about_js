const obj = {
    firstName: "kuntal",
    lastName: "das",
}
// function hello(message){
// return this.fullname =  (`${message} ${this.firstName} ${this.lastName}`);
// console.log(`${this.firstName} ${this.lastName}`);
// console.log(`${message} ${this.name}`)
// return this.fullname = (`${message} ${this.name}`)
// }
// console.log(obj)
// hello.apply(obj)
// console.log(obj)
//when we return the string with name fullname, there actually create a object
// variable named with fullname
function greet(message) {
    console.log(`${message} ${this.name}!`);
}

