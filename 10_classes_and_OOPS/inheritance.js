class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    logMe(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

//behind the scene is that call method with this keyword
class Teacher extends User{
    constructor(name, email, password){
        super(name, 30);
        this.email = email;
        this.password = password;
        
    }

    addCourse(){
        console.log(`${this.name} is now teaching a course`);
    }
}

const teacher = new Teacher("Piyush", "piyush@example.com", "1236" );
console.log(teacher.name)
teacher.logMe()
teacher.addCourse()

const teacher2 = new User("Piyush", 21);
teacher2.logMe();
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
console.log(teacher === teacher2);
