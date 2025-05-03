//the problem is if we given an array of number or string or boolean or any type and we have to write a function which returns the first element of the array then what type should we define in function parameter
//let say we define a type

// type stringOrNumber = string | number;

// function getFirstElement(number: stringOrNumber[]){
//     return number[0];
// }

// const firstElement = getFirstElement(["hello",1,2,"Piyush","arora",4,5]);
// const secondElement = getFirstElement(["Piyush","arora"]);
// const thirdElement = getFirstElement([1,2,3,4,5]);
// console.log(firstElement.toUpperCase());
// console.log(secondElement);
// console.log(thirdElement);

//What is the problem in this approach?
//User can send different types of values in inputs, without any type errors
//Typescript isn't able to infer the right type of the return type
//also we cannot use methods for that particular value, ts isn't smart enough to check itself that the given argument is string or number -> console.log(firstElement.toUpperCase());

//better approach is to use generics -> define a generic datatype while creating the function and when calling the function we will pass the actual datatype -> ts will infer the right type of the return type

function getFirstElement<T>(number: T[]): T{
    return number[0];
}
const stringArray = getFirstElement<string>(["hello","Piyush","arora"]);
const numberArray = getFirstElement<number>([1,2,3,4,5]);

console.log(stringArray.toUpperCase());
console.log(numberArray);

//now the toUpperCase() will work because we have defined the return type as string
//<T> doesn't need to be primitive