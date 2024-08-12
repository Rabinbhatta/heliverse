import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

mongoose.set()

mongoose.connect(process.env.MONGODB).then(()=>app.listen(process.env.PORT,
    ()=>console.log(`Server listening at ${process.env.PORT}`)
)).catch((error)=>console.log(error))

