import express from "express"
import logger from "./logger.middleware.js";
import auth from "./auth.middleware.js";

const app = express();
app.use(express.json())

// global middleware for logger
app.use(logger);

// home page content
app.get("/",(req,res)=>{
    res.send("Hello page")
})

// secure page authentication check for access this endpoint
app.get("/secure",auth,(req,res)=>{
    res.send("Secure page !")
})

export default app