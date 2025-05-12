const express = require("express");
const app = express();
app.use(express.json());

var users = [{
    name: "Piyush",
    kidneys: [{
        healthy: false,
    }]
}]

app.get("/", (req, res)=>{
    const userKidney = users[0].kidneys;
    const numberOfKidneys = userKidney.length;
    let count = 0;
    const healthyKidneys = userKidney.filter((kidney)=>{
        if(kidney.healthy){count++};
    })
    res.send({
        "healthyKidneys": count,
        "totalKidneys": numberOfKidneys,
        "unhealthyKidneys" : numberOfKidneys - count
    })
});
app.post("/", (req, res)=>{
    const userKidney = users[0].kidneys;
    const numberOfKidneys = userKidney.length;
    const isHealthy = req.body.isHealthy;
    if(numberOfKidneys < 2){
        userKidney.push({
            healthy: isHealthy,
        })
        console.log(userKidney);
        return res.status(200).json("kidney added");
    }else return res.status(403).json("user already has 2 kidneys");
});
app.put("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    const userKidney = users[0].kidneys;
    userKidney.forEach((kidney)=>{
        kidney.healthy = isHealthy;
    })
    console.log(userKidney);
    return res.status(200).json("kidney updated");
});
app.delete("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    let userKidney = users[0].kidneys;
    users[0].kidneys = userKidney.filter((kidney)=>{
        return kidney.healthy !== isHealthy
    })
    console.log(userKidney);
    return res.status(200).json("kidney deleted");
});


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})