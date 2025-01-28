const User = {
    _email: "piyush@gmail.com",
    _password: "1254",

    get email(){
        return this._email;
    },
    set email(value){
        this._email = value;
    }
}

const user = Object.create(User);
console.log(user._email);