import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser())
import cors from "cors";
import {connectDB} from "./db/mongodbconnection.js"
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json());

import router from "./routes/index.routes.js";
app.use('/api/v1', router)

app.listen(5000, () => console.log("Server started on port 5000"));