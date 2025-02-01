const exp=require('express')
const app=exp()

//Single Routing

const r1=exp.Router()

r1.get("/",function(req,res){
    console.log("Routing working")
    res.send(`<form>UserName:<input type='text'/>
        <input type='submit' value='Login'/>
        </form>`)
})
app.use(r1)

app.listen(3001,function(err){
    if(err)
    {
        console.log(err)
    }
    console.log("Server is Running....")
})