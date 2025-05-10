import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

app.get('/users', async(req, res)=>{
    const users = await client.user.findMany({});
    res.send(users);
})

app.get('/users/:id', async(req, res)=>{
    const id = req.params.id;
    const user = await client.user.findUnique({
        where: { id: Number(id) }
    })
    res.send(user);
})

app.post('/signup', async(req, res)=>{
    const {username, age, password} = req.body;
    
    try {
        await client.user.create({
            data:{
                username,
                age: Number(age),
                password
            }
        })
    } catch (error) {
        console.log(error);
    }
    res.send("User created");
} )

app.listen(3000);