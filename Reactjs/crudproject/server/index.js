const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const FoodModel=require("./models/Food")

mongoose.connect("mongodb://localhost:27017/food")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...')) 


//Inserted the data
app.post("/insert",async(req,res)=>{
    const {foodName,description}=req.body;
    const food=new FoodModel({foodName,description})
    try
    {
      await food.save()
      res.send("Data inserted successfully")
    }
    catch(err)
    {
         console.log(err)

    }
})



app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})



