const { MongoClient, ServerApiVersion } = require("mongodb");
const express=require('express');
const app=express();
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

//const fruitsArray = [];
app.get("/",function(req,results){
    async function run() {
        try {
          // Connect the client to the server (optional starting in v4.7)
          await client.connect();
          // Send a ping to confirm a successful connection
          //await client.db("shopDB").command({ ping: 1 });
          //const db = client.db("shopDB");
      
          // getting tuples from products collection
          // const res = await db.collection("products").find({}); // empty query
          // for await (const doc of res) {
          //     console.log(doc);
          // }
          
          // adding tuple to products collection
          // const tuple = {
          //     _id:4,
          //     name:"Mohit Akhouri",
          //     age:22
          // };
          // await db.collection("products").insertOne(tuple);
      
          // To show all databases
          // const admin = client.db("admin");
          
          // const result = await admin.command({ listDatabases: 1, nameOnly: true });
          // console.log(result.databases);
      
          // Creating a new database called fruits
          // await client.db("fruitsDB").command({ ping: 1 });
          const db = client.db("fruitsDB");
          const fruits=db.collection("fruits");
          const docs = [{
              name:"Apple",
              score:8,
              review:"Great fruit"
          },{
              name:"Orange",
              score:6,
              review:"Kinda sour"
          },{
              name:"Banana",
              score:9,
              review:"Great Stuff"
          }];
          // const insertManyresult = await fruits.insertMany(docs);
          const res = await fruits.find({}); // empty query
          const fruitsArray=[];
          for await (const doc of res) {
              console.log(doc);
              fruitsArray.push(doc);
          }
          var htmlString="";
          for(var i=0;i<fruitsArray.length;i++)
          {
            htmlString+=fruitsArray[i].review;
          }
          results.send(htmlString);
          console.log("Connected successfully to database");
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
});


//console.log("Fruits array = "+fruitsArray);


app.listen(3000,function(req,res){
    console.log("Server is running on port 3000");
});