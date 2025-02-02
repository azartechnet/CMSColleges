const express=require('express')
const app=express()

app.all("/user",function(req,res){
    res.send("Hello User")

}).listen(3001)
console.log("Server is Running...")