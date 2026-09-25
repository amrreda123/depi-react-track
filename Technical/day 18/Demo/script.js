//*                scope
// lexical scope
//! 1- global => var, let, const
//! 2- local (functional) => var, let, const

// var x = 10;
// function display() {
//     console.log(x);
//     var x = 20;
// }

// display();

//! 3- block => {let, const}

// {
//   let x = 10;
// }

// console.log(x);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

//*

// console.log(undefined + 1);

// console.log(typeof NaN);

//*               declaration function

// var x = 5
// console.log(x);

//! function body
// function test() {
//   return 5
// }
// var x = function test() {
//   return 5
// }
//! function call
//? أطبع
// console.log(test());
//? أخزن
// var x = test()
// console.log(x);

// ===========================
// var x;

// function test() {
// //   console.log(5);
// return 5
// }

// test()
//============================

// function sum(x = 1, y = 10) {//default parameter
//     console.log(x + y);
// }

// sum(); //arguments
// sum(2,0); //arguments
// sum(1,5); //arguments
// sum(1, undefined); //arguments
// sum(1,2,3,4,5,6) //arguments
// sum(9) //arguments
// sum('1') //arguments
// sum(5,4) //arguments
// sum(8,7) //arguments

// function sum(x = 1, y = 1) { //default parameter
//   console.log(x + y);
// }

// function test() {
//   var x = 10
//   var y = 20
//   sum(x,y)
// }
// test()

//*               Debugging

// var x = "word";
// function display() {
//     var x = 10;
//     console.log(x);
// }

// debugger
// display();
// console.log(x);

//*               strict mode
// ("use strict");
// var interface = 10
// console.log(interface);

// function test() {
//   x = 20
// }

// test()
// console.log(x);

//*                 isNaN - isFinite
// //! isNaN
// console.log(isNaN(5));
// console.log(isNaN("word"));
// console.log(isNaN("7"));

// //! isFinite
// console.log(isFinite('7'));

//*              convert string to number
//! + operator
// console.log(+"10n");
//! Number()
// console.log(Number("10n"));
//! parseInt()
// console.log(parseInt("10.5n"));
//! parseFloat()
// console.log(parseFloat("10.5n"));

// console.log("1" + 10);

//*             covert number to string
//! ""
// console.log(1 + "");
//! String()
// console.log(String(1));
//! template literal
// console.log(`${1}`);
//*             convert * to string
//! JSON.stringify
// console.log(JSON.stringify(1));
//*             convert [] to string
//! [].join()
// console.log([5,3].join("*"));

//*                  input => prompt()

// console.log(prompt("please enter your phone number"));

// var phone = prompt("please enter your phone number");

// console.log(isNaN(phone));

// if (isNaN(phone) == false) {
//   alert("your number is " + phone);
// }else{
//   alert("invalid number");
// }
// if (!isNaN(phone)) {
//   alert("your number is " + phone);
// }else{
//   alert("invalid number");
// }
// if (isNaN(phone) == true) {
//   alert("invalid number");
// } else {
//   alert("your number is " + phone);
// }
// if (isNaN(phone)) {
//   alert("invalid number");
// } else {
//   alert("your number is " + phone);
// }

// var phone = prompt("please enter your phone number");

// while (isNaN(phone) || phone == "" || phone == null) {
//   phone = prompt('please enter your phone again')
// }

// alert('your phone number is '+ phone)
