// function isLegal(user: {
//     name: string,
//     age: number
// }): boolean{
//     if(user.age>18){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(isLegal({name: "Piyuhs", age: 20}));

// this code works well but we have to define the object type again and again -> vioation of dry principle
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// interface User {
//     name: string,
//     email?: string, //-> ? means optional
//     age: number
// }
// function isLegal(user: User): boolean{
//     if(user.age>18){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(isLegal({name: "Piyush", age: 20}));

// function greet(user: User){
//     console.log(`hello ${user.name}`);
// }
// greet({name: "Piyush", age: 20});

//-----------------------------------------------------------------------------------------------------------------------------------------

//classes and interfaces

interface Person{
    name: string
    age: number
    greet(phrase: string): void 
}

class Employee implements Person{
    name: string
    age: number
    constructor(name: string, age: number){
        this.name= name;
        this.age= age;
    }
    greet(phrase: string){
        console.log(phrase + " " + this.name);
    }
}

const emp1 = new Employee("Piyush", 20);
emp1.greet("hello");
console.log(emp1.name + " " +  emp1.age);