//*                 Object
//! literal creation

// var obj = {
//   id : 1,
//   name : "Muhammad",
//   info : {
//     city : "BNS"
//   },
//   display : function () {

//   }
// }

//! constructor creation

// var obj2 = new Object({})

//*             String
//! literal creation
var str = "Hello World!";
//! constructor creation
// var str2 = new String("")
//! prop
// console.log(str.length);
//! methods
//? charAt()
// console.log(str.charAt(0));
//? indexOf()
// console.log(str.indexOf("W"));
// console.log(str.indexOf("o",5));
// console.log(str.indexOf("x"));

// var phone = "241516466";

// if (phone.indexOf("22") == -1) {
//   alert("not");
// } else {
//   alert("BNS");
// }

//? includes

// var phone = "01280389010";

// console.log(str.includes("W"));
// console.log(str.includes("w"));
// console.log(phone.includes("010"));

//? startsWith()

// console.log(phone.startsWith("010"));

//? endsWith()

// console.log(phone.endsWith("010"));

//? to => method

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//? slice

// console.log(str.slice());
// console.log(str.slice(4));
// console.log(str.slice(4, 8));

//? replace

// console.log(str.replace("H", "*"));
// console.log(str.replace("World", "Muhammad"));
// console.log(str.replace("o", "*"));

//? replaceAll
// console.log(str.replaceAll("o", "*"));

//? split() => convert to array

// console.log(str.split(" "));
// console.log(str.split("ll"));
// console.log(str.split("o"));
// console.log(str.split());
// console.log(str.split(""));

//*                  Number
//! literal creation
// var num = 10
//! constructor creation
// var num = new Number(5)

// console.log(num.toFixed(100));
// console.log(num.toString());

//*                 Boolean

// var x = true

// var x = new Boolean(false)

//*                 Array

// key : value,
// var obj = {
//   id: 1,
//   name: "Muhammad",
//   display: function () {},
//   test(x) {
//     return x;
//   },
//   info: {
//     city: "BNS",
//   },
//   arr: [1, 2, 3],
// };

// console.log(obj.test(5));

//! literal creation

//? index, value
var arr = [
  1,
  "Muhammad",
  function display() {
    console.log("test");
  },
  {
    city: "BNS",
  },
  [1, 2, 3, { id: 2 }, "word"],
];

//! constructor creation

// var arr2 = new Array([])

// console.log(typeof arr);

//! access (bracket notation [])

// console.log(arr[4][3].id);
// console.log(arr[4][3]['id']);
// console.log(arr[3].city);
// console.log(arr[3]['city']);
// arr[2]()

//! loop on array

//? forin
// for (const i in arr) {
//   // console.log(i);
//   console.log(arr[i]);
// }

//? for loop

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//? forof

// for (const element of arr) {
//   console.log(element);
// }

// var obj = {id: 1, name : "Muhammad"}

// for (const element of obj) { //wrong
//   console.log(element);
// }

//? forEach()

// names.forEach(function(ele , i, arr) {
//   console.log(ele);
// })

//! prop.

// console.log(arr.length);

//! methods
var names = ["Muhammad", "Ali", "Nesma", "Jana"];
// names.push("amr")
// names.push("youssef", "weam")

// names.pop()
// names.pop()

// names.unshift("kamal", "sara")
// names.shift()
// names.shift()

//? splice()
// names.splice(start, delete or not, add or not)
// names.splice(2,0, "Youssef", "Kamal")

//? join()
// console.log(names.join(" * "));

//? reverse()
// console.log(names.reverse());

//? forEach()

// higher order function
// names.forEach(function(ele , i, arr) { //callback function
//   console.log(ele);
// })

// console.log(names);

//* structure of callback function

// function test(x) {
//   x(10)
// }

// test(function x(ele) {
//   console.log(ele);
// })

//*                Math => static object

//! prop

// console.log(Math.PI);

//! method

// console.log(Math.min(10,20,30,40,100));
// console.log(Math.max(10,20,30,40,100));

// console.log(Math.floor(10.8));
// console.log(Math.ceil(10.1));

// console.log(Math.round(10.6));

// console.log(Math.random()*100);
// console.log(Math.round(Math.random() * 100));
// var r = Math.round(Math.random() * 255);
// var g = Math.round(Math.random() * 255);
// var b = Math.round(Math.random() * 255);

// document.write(`<h1 style='color: rgb(${r}, ${g}, ${b});'>test</h1>`);


//*                     Date

// var d = new Date()

//! set
// d.setFullYear(2030)
//! get
// console.log(d.getFullYear());
//! to
// console.log(d.toLocaleDateString());


// console.log(d);

//*                  Regular Expression

