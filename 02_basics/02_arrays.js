const array1 = ["piyush", "parth", "param"];
const array2 = ['arora', 'tamuly', 'udawat'];

//array1.push(array2); // as array can take any datatypes as its elements so it will take whole array2 as an element and push it as a whole
//console.log(array1);

//to add all the elements of array 2 in array 1 we use concat function .....this will return a new array with all the elements
const newArr = array1.concat(array2); //this will return 1 single newArr with all the elements of both the arrays
console.log(newArr); 

//spread operator -> it is also use to merge more than one array elements in one -> it basically spreads the elements of the array and then add it one by one
const newArr2 = [...array1 , ...array2];
console.log(newArr2); //it will give same result


const multiDArray = [1,2,3,[4,5],6,7,[4,5,[6,7,8]]]; //as it is a multidimensional array but we need to access it in a single dimension so we can use "flat"
console.log(multiDArray);
const newSingleDArray = multiDArray.flat(Infinity); //the flat method will take an argument which states to how many level of dimension we want to flat the array
console.log(newSingleDArray); 



//sometimes when we fetch data from web it comes in different formats but we need array only so to handle this

console.log(Array.isArray("piyush")); //isArray is used to check if the given value is array or not -> it will return false as "piyush" is a string
console.log(Array.from("piyush")); //from will convert the given argument into array

console.log(Array.from({name: "piyush"})); //this is interesting case as we are not providing the paramenter on which we have to make an array so it will give an empty object

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //of will take multiple values as argument and convert it into array
