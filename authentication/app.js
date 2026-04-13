const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("OK")
    
})

app.get("/store",(req,res)=>{
    res.cookie("name","qwer")
    console.log("store")
    res.send("stord")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server is runnig on port 5000")
})