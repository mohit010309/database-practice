const express=require('express');
const mysql=require('mysql2');
const ejs=require('ejs');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mohit2001",
    database:"newsletter"
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
    connection.query("select * from news",function(err,results,fields){
        res.render("home",{newsletters:results});
    });
});

app.post("/",function(req,res){
    const name = req.body.newsletterName;
    // id--name
    const insertQuery = "insert into news values(?,?)";
    const selectQuery = "select * from news";
    
    connection.query(selectQuery,function(err,results,fields){
        if(err)
        {
            console.log("error = ",err);
        }
        else
        {
            let id=-1;
            for(let i=0;i<results.length;i++)
                id=Math.max(id,results[i].id);
            if(id===-1)
                id=1;
            else 
                id=id+1;
            connection.query(insertQuery,[id,name],function(){
                console.log("Data inserted in database with id ",id);
                res.redirect("/");
            });
        }
    });
});
