//singleton object -> when the object is made from a constructor
// Object.create

//object literals
//using Symbol in an object
const mySym = Symbol("key1");
const user = {
    name: "piyush",
    // mySym: "key2", //this is not the proper syntax to declare a symbol in js objects the datatype is still string
   [mySym]: "key2", //correct way to declare a symbol
    age: 20,
    location: "karnal",
    email: "piyush@example.com",
    isLoggedIn: false
}

// console.log(user.email); //this will work fine
// console.log(user["email"]); //we have to give the argument in the form of string as an object takes a key in form of string only
// //there is another way to access the values from the objects (other than . operator) -> by using brackets

// console.log(user["location"]);
// console.log(user[mySym]); //we dont have to use "" with symbols


// console.log(user);
// user.email = "piyush@example2.com";
// console.log(user);
// Object.freeze(user); // we can prevent the object to changes using Object.freeze() hence the changes before will only reflect in the object
// user.email = "peeyush@example2.com";
// console.log(user);

//we can create a function in the object also

user.greeting = function(){
    console.log("hello user");
}

console.log(user); //the function is also added
console.log(user.greeting) // this will return undefined
console.log(user.greeting());