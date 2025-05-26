import express from "express";
import cookieParser from "cookie-parser";  
import cors from "cors";

const app =express();


//setting up middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));




export default app;