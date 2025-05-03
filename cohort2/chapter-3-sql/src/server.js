import express from "express";
const app = express();
const port = process.env.PORT || 5003;
import path, { dirname} from "path";
import { fileURLToPath } from "url";
import authRoutes from './routes/auth.route.js'
import todoRoutes from './routes/todo.route.js'
import authMiddleware from "./middleware/auth.middleware.js";

//get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);
//console.log(__filename); // C:\Users\piyus\OneDrive\Documents\Desktop\JavaScript-Practice\cohort2\chapter-3-sql\src\server.js
//get the directory name from the file path
const __dirname = dirname(__filename);
//console.log(__dirname); // C:\Users\piyus\OneDrive\Documents\Desktop\JavaScript-Practice\cohort2\chapter-3-sql\src

//serves the html from public directory
//also tells express to server all the static files from public directory
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

//serving up the html file from public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use('/auth', authRoutes)
app.use('/todos', authMiddleware,todoRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
