// requiring the package
const mongoose = require('mongoose');

// connecting to database with database name at end
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// creating a new schema
const fruitsSchema = new mongoose.Schema({
    name:String,
    rating: {
        type:Number,
        min:[1,'Too less rating!'],
        max:[6,'Too high rating']
    },
    review: String
});

// creating a new model
const Fruit = mongoose.model("Fruit",fruitsSchema);

// creating a new fruit document
const fruit = new Fruit({
    rating:4,
    review:"This is again a new fruit with no name!"
});
// fruit.save();

// To insert the document
// fruit.save().then(function(err){
//     console.log("Saved successfully!");
//     mongoose.connection.close();
// })

// closing the connections
// mongoose.connection.close();


// updating the document
// Fruit.updateOne({_id:"64b6db5efb02d3b2ce79f0ff"},{rating:5,name:"Belgian Guava",families:"mongooses guava"});
// Fruit.find({}).then(function(data){
//     console.log(data);
// });

// Fruit.updateOne({_id:"64b6ecc4958b43e547f2ce52"},{name:"NewName",review:"Mongoose data"}).then(function(logs){
//     console.log(logs);
// });

// Fruit.updateOne({_id:"64b6ecc4958b43e547f2ce52"},{name:"This is new name of fruit"}).then(function(logs){
//     console.log(logs);
// });


// deleting the document
// Fruit.find({}).then(function(data){
//     for(let i=0;i<data.length;i++)
//         console.log(data[i].name);
// });
// Fruit.deleteOne({_id:"64b6ecc4958b43e547f2ce52"}).then(function(logs){
//     console.log(logs);
// });


// deleting many documents ( or all documents )
Fruit.deleteMany({}).then(function(logs){
    console.log(logs);
    mongoose.connection.close();
});