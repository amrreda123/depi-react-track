//*               output
window.alert()
alert("Hello js from external")
//! document.write
document.write("<h1>Hello js from document</h1>")

//! console.write()
console.log("Hello js from console")

var x = 10

console.log(x)

//* declaration
var empName = "Muhammad"

//* reassign
empName = 10

//* redeclaration
var empName = true

console.log(empName);

//*               datatype
//! primitive datatype (string- number- boolean- null- undefined - symbol - bigint)

//? 1- string :

var myName = "Muhammad"
var myName = 'Muhammad'
var myName = ''

console.log(myName);
console.log(typeof myName);

//? 2- number

var num = 10
var num = 10.5

console.log(typeof num);

//? 3- boolean

var isFired = false

console.log(isFired);
console.log(typeof isFired);

//? 4- null

var x = null

console.log(x);
console.log(typeof x); //object

//? 5- undefined

var x;
var x = undefined
console.log(x);
console.log(typeof x); //undefined

//? 6- Symbol()

var x = Symbol();
var y = Symbol();

console.log(x == y);

//@ == => ask for equality (value)

console.log(6=='6');

//@ === => ask for equality (value, type)

console.log(6==='6');

//? 7- bigint

var x = 11n
console.log(x);
console.log(typeof x);

//*         naming convention

var name = "";

var name7 = 0;

var _id = 10;
var $id = 10;

var myname;
var my_name;
//! camelCase
var myName;
var empName;

// backgroundColor

//*            concat +

var myName = "Muhammad";

document.write("Hello " + myName);
document.write("Hello " + myName + " in my js file");

//! template literal

//1- ``
//2- {}
//3- $

document.write(`Hello ${myName} in my js file`);

document.write(myName)
document.write(`<h1>${myName}</h1>`)

//*               type coersion/ convertion

console.log(1 + 1); // 2
console.log(1 + '1'); // 11
console.log(true + '1'); // true1
console.log(true + 1); // 2
console.log(10 + "null"); // 10null

console.log(10 - "2"); // 8
console.log(10 * "2"); // 20
console.log(10 / "2"); // 5

console.log(1 + true); // 2
console.log(2 + false); // 2

console.log(2 + null); // 2

console.log(2 + undefined); // NaN
console.log(undefined + undefined); // NaN
console.log(null + undefined); // NaN
console.log("10" + undefined); // 10undefined

console.log(typeof NaN); // number









function declaration(c, y) {
    console.log(c + y);
}
debugger
declaration(10, 20);