const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample1.html");
});

app.post("/",function(req,res){
    console.log("Name = ",req.body.name);
    console.log("Age = ",req.body.age);

    

    const person = new Person({
        name: req.body.name,
        age: req.body.age
    });

    person.save().then(function(){
        res.send("Data posted!");
        // mongoose.connection.close();
    });
    //res.send("Data posted!");

    
});
