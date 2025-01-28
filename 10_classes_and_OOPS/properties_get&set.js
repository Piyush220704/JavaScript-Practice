// function based get and set made using defineProperty

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email;
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password;
        },
        set: function(value){
            this._password = value;
        }
    })

}

const user = new User('piyush@example.com', '123456')
console.log(user.email)
console.log(user.password)