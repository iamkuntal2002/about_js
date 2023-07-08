<<<<<<< HEAD
let d = new Date();
console.log(d)
let d1 = new Date("October 13, 2014 11:13:00")
console.log(d1.toLocaleDateString())
let d2 = new Date("2022-03-25");
console.log(d2.toDateString())
let d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
                // year,month,day,hour,min,sec,milisec
console.log(d3.toDateString())
let d4 = new Date(9444343221397);   //miliseconds
        // (Jan 1 1970) + 9444343221397 miliseconds
let d5 = new Date("June 10 2023");
console.log(d5.toDateString());

let ms = Date.parse("june 10 2023");
=======
let d = new Date();
console.log(d)
let d1 = new Date("October 13, 2014 11:13:00")
console.log(d1.toLocaleDateString())
let d2 = new Date("2022-03-25");
console.log(d2.toDateString())
let d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
                // year,month,day,hour,min,sec,milisec
console.log(d3.toDateString())
let d4 = new Date(9444343221397);   //miliseconds
        // (Jan 1 1970) + 9444343221397 miliseconds
let d5 = new Date("June 10 2023");
console.log(d5.toDateString());

let ms = Date.parse("june 10 2023");
>>>>>>> 3a26d14 (first try)
console.log(ms)