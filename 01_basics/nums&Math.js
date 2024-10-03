// const score = 200;
// console.log(score);
// const balance = new Number(50000);
// console.log(balance);

// const number = 2123.58542;
// console.log(typeof number.toString()); //toString will convert number into string

// console.log(number.toFixed(2)) // toFixed will roundoff the number to the given decimal places

// console.log(number.toPrecision(4)) // toPrecision will start to roundoff the number from starting only instead after dot like in toFixed so it used when we know the length of the number

// const hundred = 100000000;
// console.log(hundred.toLocaleString('en-IN')); //toLocalString alone will convert the number according to american way of counting to use indian way use -'en-IN'


//-------------------------------------------- MATH -------------------------------------------------------------------//

//console.log(Math.abs(-2)); //Math.abs convert negative value to positive
//console.log(Math.round(4.5)); //5 -> roundof the value that is one above
//console.log(Math.ceil(4.3)); //5 -> roundof the value to next number even if it is increased by .1
//console.log(Math.floor(4.9)); //4 -> roundof the value to itself even if increased by .9

//console.log(Math.random()); //-> values always between 0 & 1 (excluding 1)
//to ouput the number in the given range 
//console.log(Math.floor(Math.random()*10)+1); // this will give values between 1 and 10
//const max = 20;
//const min = 10;
//console.log(Math.floor(Math.random()*(max-min+1))+min); //the formula to calculate the number between the given range