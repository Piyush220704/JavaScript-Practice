//ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}#123`;
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }


// const chai = new User("chai", "chai@example.com", "chai");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

//behind the scene / before ES6/classes in javascript

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}#123`;
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@example.com", "tea");
console.log(tea.encryptPassword())
console.log(tea.changeUserName());