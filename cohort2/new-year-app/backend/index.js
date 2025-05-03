const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json());
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

const cors = require("cors");
app.use(cors({
    origin : "*"
}))

app.post('/todos', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : "you sent wrong inputs"
        })
    }

    await todo.create({
        title : createPayload.title,
        description: createPayload.description
    })
    return res.status(200).json({
        msg: "todo created"
    })
});

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});
    return res.status(200).json({
        todos
    })
});

app.post('/completed', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : "you sent wrong inputs"
        })
    }

    const todo = await todo.findOne({_id: createPayload.id});
    if(!todo){
        return res.status(404).json({
            msg: "todo not found"
        })
    }

    await todo.update({
        _id : req.body.id,
    }, {
        completed: true
    })
    
    return res.status(200).json({
        msg: "todo updated"
    })
});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})

