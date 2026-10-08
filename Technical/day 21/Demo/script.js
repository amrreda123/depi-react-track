//*                  Regular Expression

//! literal creation :

var phoneRegex = /^01(0|1|2|5)[0-9]{8}$/;

//! constructor creation :

// var phoneRegex2 = new RegExp("^01(0|1|2|5)[0-9]{8}$");

// console.log(typeof phoneRegex);
// console.log(typeof phoneRegex2);

// console.log(phoneRegex.test("01280389393"));

// var phone = prompt("please enter your phone");

// // console.log(phoneRegex.test(phone));

// // if (phoneRegex.test(phone)) {
// //   alert("your phone number is " + phone);
// // } else {
// //   alert("invlaid number");
// // }

// while (!phoneRegex.test(phone)) {
//   phone = prompt("please enter your phone again");
// }

// alert("youe phone number is " + phone);

// ===============================================

//*                   Hosted objects
// BOM
// DOM

//*                  BOM => browser object model
//*                  Window

// var x = 10

// function test() {

// }

// test()

// let y = 10

// console.log(window);

// │Window
// └──├──document.body
// └──├──history
// └──├──screen
// └──├──navigator
// └──├──location
//    ├──event

//!  prop.
// console.log(window.innerWidth); //document
// console.log(outerWidth); //window

// console.log(innerHeight); //document
// console.log(outerHeight); //window

//!  methods

//? setTimeout() - clearTimeout()

// setTimeout(function () {}, time)

// var time;
// function startTime() {
//   time = setTimeout(function () {
//     alert("time out");
//   }, 3000);
// }

// function stopTime() {
//   clearTimeout(time);
// }

//? setInterval() - clearInterval()

// setInterval(function () {}, time)

// var interval;

// function startTime() {
//   interval = setInterval(function () {
//     alert("interval");
//   }, 3000);
// }

// function stopTime() {
//   clearInterval(interval);
// }

//? open()  -  close()

// var newWin;

// function openWin() {
//   newWin = window.open("https://www.linkedin.com/", "_blank", "width=400; height=400; screenX=400; screenY=400;");
// }

// function closeWin() {
//   newWin.close();
// }

//*            document
// console.log(document);

//*            screen

// console.log(screen);
// console.log(screen.width);
// console.log(screen.availWidth);
// console.log(screen.height);
// console.log(screen.availHeight);

//*           navigator

console.log(navigator.language);


