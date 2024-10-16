//for of loop -> similar to for each loop in java
const arr = [1,2,3,4,5];
for (const val of arr) {
    // console.log(val);
}

//we can use the for of loop on every dataTypes in javascript

const str = "hello World!";
for (const char of str) {
    // console.log(char);   
}

//Map

const map = new Map(); //unique values and ordered
map.set('IN', "India");
map.set('BR', "Brazil");
map.set('USA', "United States of America");

for (const element of map) {
    //console.log(element); //it will print the array of array of key-value
}

for (const [key, value] of map) { //after destructuring
    console.log(key); //this will only print keys
    console.log(value); //this will only print the values
}

//OBJECTS are not iteratable through for of loop 