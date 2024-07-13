//import express
var express=require("express")
var cors=require("cors")
require("./connection")
var empModel = require("./model/employee")
//initialize
var app=express()
//middleware
app.use(express.json())
app.use(cors())

//api
//add employee
app.post("/add",async(req,res)=>{
    try {
        await empModel(req.body).save()
        res.send({message:"data added!!"})
    } catch (error) {
        console.log(error)
    }
})
//view
app.get("/view",async(req,res)=>{
    try {
        var data = await empModel.find()
        res.send(data )
    } catch (error) {
        console.log(error)
    }
})
//delete
app.delete("/remove/:a",async(req,res)=>{
    try {
        var id=req.params.a
        await empModel.findByIdAndDelete(id)
        res.send("data removed")
    } catch (error) {
        console.log(error)
    }
})
//update
app.put("/update/:id",async(req,res)=>{
    try {
        var id=req.params.id
        await empModel.findByIdAndUpdate(id,req.body)
        res.send("data updated")
    } catch (error) {
        console.log(error)
    }
})
//port
app.listen(3002,()=>{
    console.log("Port is up")
})