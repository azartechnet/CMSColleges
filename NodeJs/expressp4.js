const express=require('express')
const app=express()
const PORT=3001

app.use(express.raw())

app.post("/",function(req,res){
    console.log(req.body)
    res.end()
})
app.listen(PORT,function(err){
    if(err) console.log(err)
    else
{
    console.log("server is running on port "+PORT)
}
})