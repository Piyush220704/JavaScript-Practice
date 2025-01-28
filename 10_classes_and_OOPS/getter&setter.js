class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password;
    }
    set password(newPassword){
        this._password = newPassword;
    }
    get email(){
        return this._email;
    }
    set email(newEmail){
        this._email = newEmail;
    }
}

const user = new User("p@example.com", "1254");
console.log(user.password);
console.log(user.email);