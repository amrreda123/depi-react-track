// console.log(+ "5"); // => 5
// console.log("5"); // => 5

let obj = {
    name: "Amr",
    age: 25,
    city: "Cairo",
    fu : function fu(x, y) {
        console.log(`Hello from function, ${x}, ${y}`);
        return "Hello";
    }
}
// console.log(+ obj); // => NaN

// console.log(`Name: ${obj.name} age: ${obj.age} city: ${obj.city}`); // => "Name: Amr age: 25 city: Cairo"
// console.log(obj)
// obj["age"] = 26
// obj["language"] = "Arabic"
// console.log(`Name: ${obj.name} age: ${obj.age} city: ${obj.city} language: ${obj.language}`); // => "Name: Amr age: 26 city: Cairo language: Arabic"
// console.log(obj.fu("Alice", "Bob")); // => "Hello from function, Alice, Bob" and returns "Hello"
// console.log(obj["name"]);


function DMW16(){

}

var car = new DMW16();
console.log(car);
