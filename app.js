const express=require('express');
const app=express();
const dotenv = require("dotenv");
dotenv.config();
const PORT=process.env.PORT||3000;
app.listen(PORT,async ()=>{
    console.log(`server started on ${PORT}`);

})
app.get("/",async (req,res)=>{
    return res.status(200).send("hello world");
})