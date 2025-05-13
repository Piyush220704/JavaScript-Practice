"use strict";
const user = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
};
const info = {
    name: "piyush",
    email: "piyush@example.com",
    isPaid: true
};
console.log(user.name, user.email, user.isPaid);
function update(user, updateInfo) {
    if (updateInfo.name !== undefined)
        user.name = updateInfo.name;
    if (updateInfo.email !== undefined)
        user.email = updateInfo.email;
    if (updateInfo.isPaid !== undefined)
        user.isPaid = updateInfo.isPaid;
}
update(user, info);
console.log(user.name, user.email, user.isPaid);
const user2 = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
};
//here i can change all the internal field other than name and age as they both are readonly
//we can assign the whole type as readonly
const user3 = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
};
const e1 = {
    "id@1": {
        name: "Piyush",
        age: 20
    },
    "id@2": {
        name: "raman",
        age: 10
    }
};
const users = new Map();
users.set("id@1", { name: "piyush", age: 20 });
users.set("id@2", { name: "raman", age: 10 });
const user1 = users.get("id@1");
console.log(user1);
