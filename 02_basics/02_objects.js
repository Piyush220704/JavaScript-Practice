//singleton object 
// const user = new Object();

//non singleton object
const user = {}

user.id = 123;
user.name = "piyush";
user.isLoggedIn = false;


// // console.log(user);

// const user2 = {
//     email: "piyush@example",
//     fullName: {
//         userFullName : {
//             firstName: "piyush",
//             lastName: "arora",
//         }
//     }
// };
// console.log(user2.fullName.userFullName.firstName)


//merging two objects

const obj1 = {1:'a', 2:'b', 3:'c'};
const obj2 = {4:'e', 5:'d', 6:'f'};

// console.log(obj1 , obj2);
//const obj3 = {obj1 , obj2}; // this will give the same porblem as that in arrays ie it will take two independent objects not the values
// console.log(obj3);

//Object.assign -> copy all the properties for the source objects to target object and return it

const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

const obj4 = Object.assign({}, obj1,obj2); 
// console.log(obj4);

//the Object.assign takes two argument one is target and other is source -> Object.assign(target , source) ->the source can be more than one but the values are gonna store in target so it is recommended to use an empty object {} as a target as it will return a new object always

const obj5 = {...obj1, ...obj2};
// console.log(obj5);

//array of objects

const users = [
    {
        id: 1,
        age : 22,
    },
    {
        id: 2,
        age : 12,
    },
    {
        id: 3,
        age : 28,
    },
    {
        id: 4,
        age : 62,
    },
    {
        id: 5,
        age : 14,
    }
]
// console.log(users[3].id);

console.log(user);
console.log(Object.keys(user)); //this will return array of keys of object
console.log(Object.values(user)); //this will return array of values of object
console.log(Object.entries(user)); //this will return array of key-value pair of object
console.log(user.hasOwnProperty('isLoggedIn')); // this will check for the property present in user then return a boolean value