// number 1 : 
// var x = 1;
// var output = (function() {
//   delete x;
//   return x;
// })();

// console.log(output);        //1, The code above will output `1` as output. `delete` operator is used to delete a property from an object. 
// Here `x` is not an object it's **global variable** of type `number`


// number 2 :
// var x = { foo : 1};
// var output = (function() {
//   delete x.foo;
//   return x.foo;
// })();

// console.log(output);    //undefined ,
// The code above will output `undefined` as output. `delete` operator is used to delete a property from an 
// object. Here `x` is an object which has foo as a property and from a self-invoking function, we are deleting 
// the `foo` property of object `x` and after deletion, we are trying to reference deleted property `foo` which result `undefined`.



// number 3:
// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   delete emp1.company
//   console.log(emp1.company);    //xyz, The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property.


// number 4:
// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(trees)  //[ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ]


// number 5:
// var bar = true;
// console.log(bar + 0);      //1
// console.log(bar + "xyz");  //truexyz
// console.log(bar + true);   //2
// console.log(bar + false);   //1

// number 6:
// var z = 1, y = z = typeof y;
// console.log(y); //undefined, Here associativity of the assignment operator 
// is `Right to Left` so first `typeof y` will evaluate first which is string `"undefined"` and assigned to `z` and then `y` would be assigned the value of z


// number 7:
// var foo = function bar() { return 12; };
// // console.log(typeof bar());      //reference error
// console.log(typeof foo());      //number


// number 8: 
// bar();
// (function abc() { console.log('something') })();
// function bar() { console.log('bar got called') };
// bar got called
// something


// number 9: 
// var salary = "1000$";
// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";
//   console.log("My New Salary " + salary);
// })();
// Original salary was undefined
// My New Salary 5000$

// number 10:
// var counterArray = {
//     A: 3,
//     B: 4
// };
// counterArray["C"] = 1;
// console.log(Object.keys(counterArray).length); // Output 3
// console.log(Object.getOwnPropertyNames(counterArray).length); // Output 3


// number 11:
// function User(name) {
//     this.name = name || "JsGeeks";
// }

// var person = new User("xyz")["location"] = "USA";
// console.log(person);    //USA
// console.log(person.location);   //undefined

// number 12 : deepClone of an object
// function deepClone(object){
// 	var newObject = {};
// 	for(var key in object){
// 		if(typeof object[key] === 'object'  && object[key] !== null ){
// 		 newObject[key] = deepClone(object[key]);
// 		}else{
// 		 newObject[key] = object[key];
// 		}
// 	}
// 	return newObject;
// }


// number 13:
// var person = {
// 	name: 'Nishant',
// 	age: 24
// }
// console.log('name' in person);  //true
// console.log('salary' in person);    //false

// number 14:
// var arr = [10, 32, 65, 2];
// // for (var i = 0; i < arr.length; i++) {   //output : 4 4 4 4 
// for (let i = 0; i < arr.length; i++) {      //output : 0 1 2 3
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(j) {
//     return function () {
//       console.log('The index of this number is: ' + j)
//     };
//   }(i), 3000);
// }

// number 15 :
