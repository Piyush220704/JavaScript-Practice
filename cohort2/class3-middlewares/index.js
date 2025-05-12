const express = require("express");
const app = express();
const port = 3000;


function oldEEnough(age){
    return age>18;
}

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(oldEEnough(age)){
        next();
    }else{
        res.status(403).json({
            msg: "you can't ride"
        })
    }
}
app.get('/ride1', isOldEnoughMiddleware ,function(req, res){
    return res.status(200).json({
        msg: "you can ride"
    })
})

app.listen(port, ()=>{
    console.log("server is running on port 3000");
})