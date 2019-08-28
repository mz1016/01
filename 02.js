/**
 * 
 */
var express=require("express")
var app=express()
var db=require("./db")
app.get("/add",function(req,res){
    db.add("text",{"username":"rrr"},function(err){
        if(err){
            throw err
        }
        res.send("输入成功 ")
    })
})
app.listen(3000)
