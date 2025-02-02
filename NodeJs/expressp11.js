const express=require('express')
const app=express()
const PORT=3000

const user=express.Router()

user.get("/login",function(req,res){
    res.send("login page")
    console.log(req.baseUrl)
    res.end()
})
app.use("/user",user)

app.listen(PORT,function(err){
    if(err)
    console.log(err)
    else
    console.log("server is running on port "+PORT)
})