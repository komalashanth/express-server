const { log } = require("console");
const express = require("express");

const app =express();
app.use(express.json());
app.listen(3000);

let users={};

app.get('/user',(req,res) =>{
    res.send(users);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully",
        user:req.body
    });
});

app.patch('/user',(req,res)=>{
    console.log('req.body->',req.body);
    let dataToBeUpdated=req.body; 
    for(key in dataToBeUpdated){
      users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully"
    })
})