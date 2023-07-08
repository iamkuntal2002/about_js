<<<<<<< HEAD
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.hello = function(){
    console.log("add function " + this.name);
}
var person1 = new Person("Vivek", 76, "male");  
console.log(person1);
person1.hello()
=======
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.hello = function(){
    console.log("add function " + this.name);
}
var person1 = new Person("Vivek", 76, "male");  
console.log(person1);
person1.hello()
>>>>>>> 3a26d14 (first try)
