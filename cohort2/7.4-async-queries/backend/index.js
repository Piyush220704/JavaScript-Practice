const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.get('/notification', (req, res)=>{
    return res.json({
        networks : 20,
        jobs : 7,
        messaging: 12,
        notifications: 99,
    })
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})