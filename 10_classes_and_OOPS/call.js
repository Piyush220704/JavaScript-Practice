//call bind apply


// function setUsername(username){
//     this.username = username
// }

// function createUser(username, email, password){
//     this.email = email,
//     this.password = password,
//     setUsername(username);
// }

// const user = new createUser("piyush", "p@example.com", "12365")
// console.log(user) 
// here only the email and password are set as the username is to setUsername and setUsername has different execution context and it will get removed out of the call stack after execution so it is not able to set the username



// Using call and this keyword

function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    this.email = email,
    this.password = password,
    setUsername.call(this, username);
}

const user = new createUser("piyush", "p@example.com", "12365")
console.log(user) //now we can get the username also as we are giving this keyword ie execution context of createUser to setUsername function