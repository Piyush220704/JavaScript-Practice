/*
Stack and heap memory

Stack -> Primitive -> copy
Heap -> Non-Primitive -> reference

 */

// let myName = "piyush";
// let yourName = myName;
// console.log(myName); //piyush
// console.log(yourName); //piyush
// yourName = "piyushB";
// console.log(yourName); //piyushB
// console.log(myName); //piyush

//a copy is passed to yourName so any changes made in yourName will not reflected in myName;

// let myObj = {
//     name: "piyush",
//     age: 20,
// }

// let yourObj = myObj;
// console.log(yourObj);
// console.log(myObj);
// yourObj.age = 40;
// console.log(yourObj);
// console.log(myObj);

// as objects are passed by reference so the changes in yourObj will be reflected in myObj