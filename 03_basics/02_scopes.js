
// let a = 300;

// //scope
// if(true){
//     let a = 10;
//     const b = 20;
//     // console.log(a);
// }

// // console.log(a); //both a and b are blocked scoped datatype in js ie it is not accessible outside the scope
// // console.log(b);
// // console.log(a);

// //function inside another function

// function one(){
//     const username = "piyush";
//     function two(){
//         const website = "youtube";
//         console.log(username); //child function can access variables from parent function
//     }
//     // console.log(website); //the website is not accessible as its scope ended in line 22
//     two();
// }
// one();

// if(true){
//     const username = "piyush";
//     if(username === "piyush"){
//         const website = " youtube";
//         console.log(username , website) //we can access username because for inner if the global scope is outer if
//     }
//     // console.log(website); //we cannot access the website as its scope ended in line 33
// }
// // console.log(username); //we cannot access teh username because its scope ended in line 35


console.log(addOne(5));
function addOne(num){
    return num+1;
}
// console.log(addTwo(4));
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(4));
