import express from "express";
import ip from "ip";
const app = express();


app.get("/ping",(req,res)=>{
    res.json({
        message:"pong",
        serverAddress:ip.address() 
    })
})

app.listen(3000,()=>{
    console.log("Server running on port:",3000);
})