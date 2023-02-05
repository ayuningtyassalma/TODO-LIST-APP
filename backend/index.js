import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import ListRoute from "./routes/ListRoute.js"

// running express
const app = express()
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/todolistapp_db', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error)=> console.log(error))
db.once ('open', ()=> console.log('database is connect'))

app.use(cors())
app.use(express.json())
app.use(ListRoute)
app.listen(5000, ()=>  console.log('server running...') )