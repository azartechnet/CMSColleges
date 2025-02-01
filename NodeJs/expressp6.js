const express=require('express')
const app=express()
const PORT=3001;

app.get("/hello",(req,res)=>{
    res.set('Content-Type','text/html')
    res.status(200).send('<h1>Welcome</h1>')
}).listen(PORT)