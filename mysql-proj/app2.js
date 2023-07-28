const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mohit2001"
});

const query="use dbnew4";
connection.query(query,function(err,results,fields){
    console.log("switched to database");
    const createTableQuery = "create table student (id int not null, name varchar(20), primary key(id))";
    connection.query(createTableQuery,function(err,results,fields){
        console.log("Table created!");
    });
});



