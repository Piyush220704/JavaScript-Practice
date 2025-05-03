import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())

app.get('/todos', (req, res)=>{
    return res.json([
        {
            id: 1,
            title: 'todo 1',
            description: 'description 1',
        },{
            id: 2,
            title: 'todo 2',
            description: 'description 2',
        },{
            id: 3,
            title: 'todo 3',
            description: 'description 3',
        },{
            id: 4,
            title: 'todo 4',
            description: 'description 4',
        }
    ])
})

app.listen(3000, () => console.log('server is running'))