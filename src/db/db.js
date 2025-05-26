import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
        console.log("Connected to the database successfully");
        console.log("Database connection details:", connectionInstance.connections[0].host);  
    }
    catch(err){
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;
// This code connects to a MongoDB database using Mongoose.