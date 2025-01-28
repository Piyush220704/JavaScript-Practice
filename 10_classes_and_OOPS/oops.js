// const user = {
//     username: "Piyush",
//     loginCount: 0,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("got user details")
      // console.log(`${this.username}`)
//         console.log(this)
//     }
// } //object literal;


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function createUser(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;

    this.greeting = ()=>{
        console.log(`Hello ${this.username}`);
    }

    return this; //it is defined implicitly. it is optional to write
}

const user1 = new createUser("Piyush", "12345", "piyush@example.com");
const user2 = new createUser("partha", "122", "partha@example.com");
// console.log(user2);

console.log(user1.constructor)

//new keyword -> enpty object is created....constructor function is called  

// constructor -> referece to itself