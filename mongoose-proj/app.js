// requiring the package
const mongoose = require('mongoose');

// connecting to database with database name at end
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// creating a new schema
const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// creating a new model
const Fruit = mongoose.model("Fruit",fruitsSchema);

// creating a new fruit document
const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit."
});

const kiwi = new Fruit({
    name:"Kiwi",
    score:10,
    review:"The best fruit!"
});

const orange=new Fruit({
    name:"Orange",
    score:4,
    review:"Too sour for me"
});

const banana =new Fruit({
    name:"Banana",
    score:3,
    review:"Weird texture"
});

// to save in bulk
//Fruit.insertMany([kiwi,orange,banana]);
// const res=Fruit.find({name:"Apple"}).then(function(fruit){
//     const arr=fruit;
//     console.log(arr);
//     // mongoose.connection.close();
// });
// let flag = res.cursor().on('data',function(fruit){
//     console.log(fruit.name);
// });





// To insert the document
//fruit.save();



// creating a person schema
// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// creating a model out of schema for Person
//const Person = mongoose.model("Person",personSchema);

// creating a new person document
// const person = new Person({
//     name: "Mohit",
//     age: 22
// });

// inserting the document
// person.save();

//console.log("document added !");
