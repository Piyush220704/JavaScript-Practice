const obj = {
    js : "javascript",
    java : "java",
    py : "python",
    cpp : "C"
}

//for of loop cannot iterate in objects for this we use for in loop 
for (const key in obj) {
    // console.log(key); //this will give all the keys
    // console.log(obj[key]); //this will give the values present at the key
}

//how for in loop works on array

const arr = ["python", "java", "javascript", "ruby", "jango"];
for (const key in arr) {
    // console.log(key); //=>it will give the index number
    // console.log(arr[key]); //=> it will give the value present at index number
}

//we cannot iterate in maps using for in loop
const map = new Map(); //unique values and ordered
map.set('IN', "India");
map.set('BR', "Brazil");
map.set('USA', "United States of America");

for (const key in map) {
    console.log(key);
}