// function getData() {
//   fetch("https://fakerapi.it/api/v1/persons").then((res) =>
//     res.json().then((data) => console.log(data.data))
//   );
// }

// //using async and await
// async function getData(){
//     const res = await fetch("https://fakerapi.it/api/v1/persons");
//     const finalData = await res.json();
//     console.log(finalData.data);
//     document.getElementById('container').innerHTML = JSON.stringify(finalData.data)
// }

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret@123";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "WTFPiyush",
    password: "123456",
    name: "Piyush",
  },
  {
    username: "SolidJojo",
    password: "145632",
    name: "Partha",
  },
  {
    username: "Jardani",
    password: "147852",
    name: "Paramveer",
  },
];

function userExists(username, password){
    return ALL_USERS.find((user)=>{
        return user.username === username && user.password === password
    })
}

app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(404).json({
            msg: "user doesn't exists"
        })
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    })
});

app.get('/users', (req, res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        //return the list of users other than this username
        return res.json({
            users: ALL_USERS.filter((user)=>{
                return user.username !== username
            })
        })
    } catch (error) {
        return res.status(403).json({
            msg: "invalid token"
        })
    }
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
