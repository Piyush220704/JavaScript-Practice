import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

router.post('/register', async(req, res)=>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    try{
        const insertUser = db.prepare(`INSERT INTO user (username, password) VALUES (? , ?)`)
        const result = insertUser.run(username, hashedPassword);

        // now that we have a user i want to add a default todo
        const defaultTodo = `hello :) add your first todo`;
        const insertTodo = db.prepare(`INSERT INTO todo (user_id, task) VALUES (?, ?)`);
        insertTodo.run(result.lastInsertRowid, defaultTodo);

        // create a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'});
        res.json({token});

    }catch(err){
        console.log(err)
        res.status(503)
    }

})

router.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    try{    

        const getUser = db.prepare(`SELECT * FROM user WHERE username = ?`)
        const user = getUser.get(username);

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({message: 'Invalid credentials'});
        }

        //successful authentication
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'});
        res.json({token});
        

    }catch(err){
        console.log(err);
        res.status(503);
    }
})

export default router;