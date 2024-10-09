const myArr = [0,1,2,true,"piyush"]; //1st decleration
//const myArr2 = new Array(1,2,4,"piyush"); //2nd decleration
//array creates a shallow copy in javascript
// console.log(myArr2)
// console.log(myArr[5]);

//methods
//myArr.push(4); // add element to last of array
//myArr.pop(); //remove last element 

//myArr.unshift(9); //add element to front of array.....it is not properly optimised as we have to shift all the elements to right
//myArr.shift();//remove the elements from the front

//console.log(myArr.includes(9)); //return a boolean value
//console.log(myArr.indexOf(8)); //return the index of element if not present returns -1

//const newArr = myArr.join(); //this will copy the element of myArr and store it in form of string
//console.log(typeof newArr); //this will return string value
//console.log(myArr);


//slice and splice
//slice doesn't change the original array whereas splice changes

console.log(myArr);
console.log("A " , myArr);
const nA1 = myArr.slice(1,4); //it will run from index 1 to 3 excluding 4 and will not change the original array
console.log(nA1);

console.log("B " , myArr);
const nA2 = myArr.splice(1,4); //it will run from index 1 to 4 (including 4) and will change the original array
console.log(nA2);
console.log(myArr);