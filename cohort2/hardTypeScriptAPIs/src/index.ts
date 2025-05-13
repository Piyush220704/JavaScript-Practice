interface User{
    name: string,
    age: number,
    email: string,
    role: string,
    isPaid: boolean
}

const user : User = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
}
//Pick lets you to pick certain properties from a type
type UpdateInfo = Pick<User, "name" | "email" | "isPaid">;
const info: UpdateInfo = {
    name: "piyush",
    email: "piyush@example.com",
    isPaid: true
} 

//partial lets you to pick certain properties from a type but here all the properties are not necessasry

type updatedInfoPartal = Partial<UpdateInfo>;

console.log(user.name, user.email, user.isPaid);
function update(user: User, updateInfo: updatedInfoPartal){
    if (updateInfo.name !== undefined) user.name = updateInfo.name;
  if (updateInfo.email !== undefined) user.email = updateInfo.email;
  if (updateInfo.isPaid !== undefined) user.isPaid = updateInfo.isPaid;
}
update(user, info);
console.log(user.name, user.email, user.isPaid);


// ---------------------------------------
//constants on internal values
//readonly

type User2 = {
    readonly name : string,
    readonly age : number,
    email : string,
    role : string,
    isPaid : boolean
}
const user2 : User2 = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
}
//here i can change all the internal field other than name and age as they both are readonly
//we can assign the whole type as readonly
const user3 : Readonly<User2> = {
    name: "piyushhhh",
    age: 20,
    email: "piyush222@example.com",
    role: "admin",
    isPaid: false
}


//-------------------------------------------------------------------------------------------------------
//Records
// records lets you give cleaner type to the objects 
interface user {
    name: string,
    age: number
}

//this is the ugly way of writing the type
type Users = {
    [key: string]: user
}

//a more cleaner way would be by using records -> here the first value is a key and second is value
type Users2 = Record<string, user>

const e1: Users2 = {
    "id@1":{
        name: "Piyush",
        age: 20
    },
    "id@2":{
        name: "raman",
        age: 10
    }
}

//------------------------------------------------------------------------------------------------
//another way to store key value pairs is using Map
type User3 = {
    name: string,
    age: number
}
const users = new Map<string, User3>();
users.set("id@1", {name: "piyush", age: 20});
users.set("id@2", {name: "raman", age: 10});

const user1 = users.get("id@1");
console.log(user1);