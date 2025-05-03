const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
const jwtpassword = "secret@123";
app.use(express.json());
const port = 3000;

mongoose.connect("mongodb://localhost:27017/class3-cohort");

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

async function userExists(username){
    //should check in database
    return await User.findOne({username: username});
}

app.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    if(await userExists(username)){
        return res.status(404).json({
            msg: "user already exists"
        })
    }
    const user = new User({
        name: name,
        username: username,
        password: password
    })
    await user.save();
    return res.json({
        msg: "user created"
    })
})

app.post('/signin', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({username: username});
    if(!existingUser){
        return res.status(404).json({
            msg: "user doesn't exists"
        })
    }
    
    if(existingUser.password !== password){
        return res.status(404).json({
            msg: "wrong password"
        })
    }

    var token = jwt.sign({username: username}, jwtpassword);
    return res.json({
        token,
    })
})

app.get('/users', function(req, res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpassword);
        const username = decoded.username;
        return res.json({

        })
    }catch(err){
        return res.status(403).json({
            msg: "invalid token"
        })
    }
})

app.listen(port, ()=>{
    console.log("server is running on port 3000");
})