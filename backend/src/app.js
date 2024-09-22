import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


import cors from 'cors';

// Set up CORS
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true // Allow cookies to be sent
}));

console.log('hello');

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.routes.js"
import seminarRouter from "./routes/seminar.routes.js"

app.use("/api/users", userRouter)

app.use("/api/projects", projectRouter)

app.use("/api/seminars",seminarRouter)

export { app }