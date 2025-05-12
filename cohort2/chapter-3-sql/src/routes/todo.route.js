import express from "express";
import db from '../db.js'

const router = express.Router();


//get all todo for logged in user
router.get('/', async(req, res)=>{
    const getTodos = db.prepare(`SELECT * FROM todo WHERE user_id = ?`)
    const todos = getTodos.all(req.userId);
    return res.json(todos);
})

//post a todo
router.post('/', async(req, res)=>{
    const {task} = req.body;
    const insertTodo = db.prepare(`INSERT INTO todo (user_id, task) VALUES (?, ?)`)
    const result = insertTodo.run(req.userId, task);
    return res.status(201).json({id: result.lastInsertRowid, task, completed: 0});
})


//update a todo
router.put('/:id', async(req, res)=>{
    const {completed} = req.body;
    const {id} = req.params;
    const updatedTodo = db.prepare(`UPDATE todo SET completed = ? WHERE id = ?`);
    updatedTodo.run(completed, id);
    return res.json({id, completed});
    
})

//delete a todo
router.delete('/:id', async(req, res)=>{
    const {id} = req.params;
    const deleteTodo = db.prepare(`DELETE FROM todo WHERE id = ? AND user_id = ?`);
    deleteTodo.run(id, req.userId);
    return res.json({id});
})

export default router;