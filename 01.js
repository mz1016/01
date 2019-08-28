// import { connect } from "http2";

/**
 * 
 */
var express=require("express");
var app=express();
var mongoClient=require("mongodb").MongoClient;
//  console.log(mongoClient);

app.get("/add",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
        // 创建数据库
        var dbName=db.db("adminuser");
        // 连接集合
        dbName.collection("text").insert({"username":"gg"},function(err){
            if(err){
                throw err
            }
            res.send("插入成功")
            db.close()
        })
    })
})
app.listen(3000);