"use strict";
const userArray = [
    {
        name: "Piyuhs",
        age: 20
    },
    {
        name: "Partha",
        age: 25
    },
    {
        name: "Rahul",
        age: 15
    }
];
function filterisValid(users) {
    return users.filter(user => user.age > 18);
}
const newArray = filterisValid(userArray);
console.log(newArray);
