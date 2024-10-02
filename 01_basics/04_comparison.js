// console.log(2>1);

// console.log("2" > 1); -> always compare same datatype

//console.log(null>0); -> false
//console.log(null == 0); -> false
//console.log(null>=0); -> true

/*
 the reason is that an equality check == and comparisons  > < >= <= work differently
 Comparisons convert null to a number, treating it as 0.
 That's why (3) null >= 0 is true and (1) null > 0 is false
*/


// Strict check using === . it checks the value as well as the data type
//console.log("2" === 2); return false;

