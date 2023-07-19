const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    work:Array
});

const Person=mongoose.model("Person",personSchema);

Person.find({name:"King"}).then(function(logs){
    for(var i=0;i<logs[0].work.length;i++)
        console.log(logs[0].work[i]);
});