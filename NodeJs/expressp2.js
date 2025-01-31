const express=require('express')
const app=express()
app.use(express.json())

app.post("/",function(req,res){
    console.log(req.body.name)
}).listen(3001)
console.log("Server is Running...")