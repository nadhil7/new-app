import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js'
import user from './models/user.js'

const app =express();

app.use(express.json())
const uri =  'mongodb://127.0.0.1:27017/newone'

mongoose.connect(uri).then(()=>{
    console.log("database Connected"); 
})

app.listen(5000,()=>{
    console.log(`server created at http://localhost:5000`);
})
app.use("",router)