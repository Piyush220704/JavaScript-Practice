function sayMyName(){
    console.log("Piyush");
}

//sayMyName; //this is just the referece to the function
//sayMyName(); //this is calling the function //this will execute


function add(num1, num2){
    return num1+num2;
}

// const num3 = add(4,5);
// console.log(num3);

//setting up a default value in parameter
function greet(username = 'p'){
    if(!username){ //this piece of code will never run as their is always a default parameter 
        console.log('enter the name first');
        return;
    }
    return `good morning ${username}`;
}
//console.log(greet()); //this will take the default value of argument defined in parameter ie 'p'
//console.log(greet('Piyush')); //the default value is overridden

//shopping cart addition using rest operator->
function addToCart(...num1){ //the syntax of rest and spread operator are same but the difference arrises on their use cases
    return num1;
}

//console.log(addToCart(50,20,30)); //this will return an array of parameters passed

//passing objects to functions

const user = {
    name:"piyush",
    age: 20,
}
function info(anyObj){
    console.log(`${anyObj.name}'s age is ${anyObj.age}`);
}
// info(user);

//we can pass an object directly
// info({
//     name:"Piyush",
//     age: "19",
// });

//passing array to functions
const newArr = [1,2,3,4,5];
function return2nd(arr){
    return arr[1];
}
console.log(return2nd(newArr));
//like in objects we can directly pass the array in function call
console.log(return2nd([5,7,8,9]));