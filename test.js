// foo(); // Here foo is still undefined
// var foo = function foo() {
//   return 12;
// };

// var foo = undefined;
// foo(); // Here foo is undefined
// foo = function foo() {
//   // Some code stuff
// }

// var foo = undefined;
// foo = function foo() {
//   // Some code stuff
// }
// foo(); // Now foo is defined here

// console.log(a)
// var a = 10;

// function isArray(value) {
//     return Object.prototype.toString.call(value) === '[object Array]';
// }
// console.log(isArray([23,6,76]))     //true
// console.log(isArray({name : "kuntal"}))     //false

// function appLog() {
//     var args = Array.prototype.slice.call(arguments);
//     args.unshift('your app name');
//     console.log.apply(console, args);
//   }  
//   appLog("Some error message"); 


// var person = {
// 	name : 'John',
// 	age  : 24
// }

// var address = {
// 	addressLine1 : 'Some Location x',
// 	addressLine2 : 'Some Location y',
// 	city : 'NewYork'
// } 
// function merge(toObj, fromObj) {
//     // Make sure both of the parameter is an object
//     if (typeof toObj === 'object' && typeof fromObj === 'object') {
//       for (var pro in fromObj) {
//         // Assign only own properties not inherited properties
//         if (fromObj.hasOwnProperty(pro)) {
//           // Assign property and value
//           toObj[pro] = fromObj[pro];
//         }
//       }
//     }else{
//         throw "Merge function can apply only on object";
//     }
//   }
// merge(person , address); 
// const mergeobj = (toObj, fromObj) => Object.assign(toObj, fromObj);
// console.log(mergeobj)



// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }


// var string = "Welcome to this Javascript Guide!";
// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseWord = reverseBySeparator(string, " ");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// var arr = string.split(" ").reverse().join(",");
// console.log(arr)

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log(reverseEntireSentence);
// console.log(reverseWord)
// console.log(reverseEachWord)



function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}
// error if we try to access the private variable like below
// _counter;
// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 
// now we can access the private variable in the following way
console.log(c.retrieve()); // => The counter is currently at: 14