var Employee = function (name, salary) {
    this.name = name || "";
    this.salary = salary || 5000;
    // We can create a method like this:
    this.formatSalary = function () {
        return this.name + " " + this.salary;
    };
};
// Alternatively we can add the method to Employee's prototype:
Employee.prototype.formatSalary2 = function () {
    return this.name+" " + this.salary;
}
//creating objects
var emp1 = new Employee('Yuri Garagin', 1000000);
var emp2 = new Employee('Dinesh Gupta', 1039999);
var emp3 = new Employee('Erich Fromm', 1299483);

console.log(emp1.formatSalary())
console.log(emp1.formatSalary2())
console.log(emp2.formatSalary2())
console.log(emp2.formatSalary2())
console.log(emp3.formatSalary2())
console.log(emp3.formatSalary2())