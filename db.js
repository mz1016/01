/**
 * 
 */
var mongoClient=require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017"
function ConnectDB(callback){
    mongoClient.connect(url,(err,mongo)=>{

        var dbNamee=mongo.db("adminuser")
        if(err){
            callback(err,null)
        }
        callback(err,mongo,dbNamee)
    })

}
exports.add=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbNamee){
        dbNamee.collection(collectionName).insert(json,function(err,res,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}



// demijour
