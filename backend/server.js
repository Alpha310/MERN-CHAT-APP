const express = require('express')  //import express
const {chats} =  require('./data/data');

const app =express();//creating instance for express()

app.get('/', (req,res)=>{          //first express api with callback function 
    res.send("API is running")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
});

app.get('/api/chat/:id',(req,res)=>{
    console.log(req)
})


app.listen(5000, console.log("Server started on Port 5000"))