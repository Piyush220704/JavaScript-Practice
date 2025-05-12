// const myName = "Piyush       ";
// console.log(myName.trueLength()); //create a new method trueLength that returns the string along with length of name


// const myHeros = ["Thor", "Spiderman"];
// const heroPowers = {
//     thor: "thunder",
//     spiderman: "spidey-sense",

//     getSpideyPowe: function(){
//         return `spiderman has ${this.spiderman}`;
//     }
// }


// Object.prototype.piyush = ()=>{
//     console.log("Piyush is everywhere");
// }
// console.log(heroPowers.getSpideyPowe())
// heroPowers.piyush();
// myHeros.piyush();

// Array.prototype.heyPiyush = ()=>{
//     console.log("Hey Piyush");
// }
// myHeros.piyush();
// myHeros.heyPiyush();

// heroPowers.heyPiyush(); //it will not work because heyPiyush is defined on Array.prototype and not on Object.prototype



//inheritance 
// we can inherit the properties of one object to another object using the keyword __proto__

// const user = {
//     name: "piyush",
//     age: 21
// }

// const teacher = {
//     canMakeVideos: true,
//     __proto__: user
// }

// const teachingSupport = {
//     makeAssignment: "JavaScript",
//     fulltime: true,
//     __proto__: user
// }

// const TASupport = {
//     isAvailable: false,
//     __proto__: teachingSupport
// }
// console.log(teacher.age) // -> piyush
// console.log(teacher.age); //->21 

// modern syntax
// Object.setPrototypeOf(teachingSupport, teacher)


const myName = "Piyush       ";
String.prototype.trueLength = function(){
     return `${this.trim()} has length of ${this.trim().length}`;
 }

 console.log(myName.trueLength()); //create a new method trueLength that returns the string along with length of name