"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
const emp1 = new Employee("Piyush", 20);
emp1.greet("hello");
console.log(emp1.name + " " + emp1.age);
