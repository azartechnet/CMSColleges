const exp=require('express')
const app=exp()
const PORT=3001;
app.get("/",(req,res)=>{
   
    res.send(`<div><h2>Welcome</h2></div>`)
}).listen(PORT)
console.log("Server is Running...")