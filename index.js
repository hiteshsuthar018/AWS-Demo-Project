import express from "express";
import ip from "ip";
const app = express();


app.get("/ping",(req,res)=>{
    for(let i=0;i<10000000000;i++){
        
    }
    res.json({
        message:"pong",
        serverAddress:ip.address() 
    })
})

app.listen(3000,()=>{
    console.log("Server running on port:",3000);
})