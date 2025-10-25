import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

//export a function that connects to db

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to mongodb")
    })
    .catch((err)=>{
        console.log("Error connecting to mongodb", err.message)
    })
}

export default db