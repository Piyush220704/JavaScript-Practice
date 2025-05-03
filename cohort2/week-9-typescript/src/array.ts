// type numberArray = number[] // -> type alias -> type is of array of number

// let numArray: numberArray;
// numArray = [1,2,3];
// numArray = [1,2,3,4,5,6,7,8,9,10];

// function sumArray(numberArray: numberArray){
//     let sum = 0;
//     for(let i=0;i<numberArray.length;i++){
//         sum += numberArray[i];
//     }
//     return sum;
// }
// console.log(sumArray(numArray))

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//array of objects
//-> create a type of User and then create an array of User using type User[] 
//-> to create array of anything just use [] -> [] means array -> number[], string[], User[]
type User = {
    name: string,
    age: number
}

const userArray: User[] = [
    {
        name: "Piyuhs",
        age: 20
    },
    {
        name: "Partha",
        age:25
    },
    {
        name: "Rahul",
        age: 15
    }
]

function filterisValid(users: User[]){
    return users.filter(user => user.age>18);
}
const newArray = filterisValid(userArray);
console.log(newArray);