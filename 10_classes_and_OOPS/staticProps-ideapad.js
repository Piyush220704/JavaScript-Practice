class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User ${this.username}`);
    }

    //static keyboard will not allow access to the method
    static createId(){
        return `123`;
    }
}

const piyush = new User("piyush");
// console.log(piyush.createId());
console.log(User.createId()); // the static methods belong to class while the other methods belong to the objects made of that class 
//so User.createId() will work