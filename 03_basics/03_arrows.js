const user = {
    username : "piyush",
    age : 20,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this) //this gives the current global context which for this is the user object
    }
}

// user.welcomeMessage();
// user.username = 'Sam';
// user.welcomeMessage();

//console.log(this); //inside the node environment the this keyword gives empty object
//in browser this keyword gives the window object

// function one(){
//     const username = "piyush"
//     console.log(this.username); //in node environment this contains something (discussed later)
// }
// one()

// const one = ()=>{

//     console.log(this); //this represents an empty object
// }
// one();

//implicit and explicit return statement in arrow funcion

// const add = (num1, num2)=>{
//     return num1+num2; //explicitly writing return
// }

// const add = (num1,num2) => num1+num2; //without writing return statement
const add = (num1,num2) => (num1+num2); //without writing return statement and wrapping in paranthesis not curly parenthesis

console.log(add(5,6));