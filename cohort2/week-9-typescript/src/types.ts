// type User = {
//     name: string,
//     email?: string, 
//     age: number
// }

// interface User2 {
//     name: string,
//     email?: string, 
//     age: number
// }

//both types and interfaces are almost the same. types let us define multiple types to a single variable while interfaces let us define multiple interfaces to a single variable

// type greetType = number | string;
// function greet(greet: greetType){
//     console.log(greet);
// }

// greet(5);
// greet("hello"); //we can pass either number | string or greetType in the greet function parameter  greet(5) and greet("hello") both are valid

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//intersection types

type Employee1 = {
    name: string,
    startDate : Date
}

interface Manager{
    name: string,
    budget: number
}

type superUser = Employee1 & Manager; //intersection type
// type superUser = {
//     name: string,
//     budget: number
//     startDate : Date
// }
//this is same as above

const t1 : superUser = {
    name: "piyush",
    budget: 100,
    startDate: new Date()
}