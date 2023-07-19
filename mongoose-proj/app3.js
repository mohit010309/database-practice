const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitsSchema);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});

const Person = mongoose.model("Person",personSchema);

const grapes = new Fruit({
    name:"grapes",
    rating:2,
    review:"It'tasty and juicy"
});

//jackfruit.save();

Person.updateOne({name:"Namit"},{favouriteFruit:grapes}).then(function(logs){
    console.log(logs);
});
