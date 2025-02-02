const exp=require('express')
const app=exp()
const PORT=3001

//Multiple Routing

const r1=exp.Router()

const r2=exp.Router()

const r3=exp.Router()

r1.get("/",function(req,res){
    res.send("Hello from route 1")
})
r2.get("/",function(req,res){
    res.send("About route 1")
})
r3.get("/",function(req,res){
    res.send("Contact route 1")
})

app.use("/user",r1)
app.use("/user/about",r2)
app.use("/contact",r3)

app.listen(PORT,function(err){
    if(err)
    console.log(err)
    else
    console.log("Server is running on port "+PORT)
})
