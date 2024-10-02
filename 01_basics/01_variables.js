const id = 12212;
let email = "piyush@example.com";
var pass = "12321";
city = "karnal"; //this is also a possibility but the worst
let accountState;



//id = 2; //const aannot be changed
email = "piyush2@example.com";
pass = "45654";
city = "noida";
console.log(id);
//the console.log can be sometime very time consuming so using console.table instead
console.table([email, pass, city, id, accountState]);
/*
-> prefer not to use var because of block scope and functional scope
-> the values which are only declared and not defined are by default undefined
*/