import express from "express"
const app = express();
import cors from "cors";

app.use(cors({
    origin: "*"
}))

const todo = [{
    id: 1,
    title: "todo 1",
    description: "todo 1 description"
},{
    id: 2,
    title: "todo 2",
    description: "todo 2 description"
},{
    id: 3,
    title: "todo 3",
    description: "todo 3 description"
},{
    id: 4,
    title: "todo 4",
    description: "todo 4 description"
},{
    id: 5,
    title: "todo 5",
    description: "todo 5 description"
}]

app.get('/todos/:id', function(req, res){
    const id = parseInt(req.params.id);
    const todoid = todo.find(t=>t.id === id);
    res.send({todo : todoid});
})

app.listen(3000);