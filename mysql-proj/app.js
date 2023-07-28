const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mohit2001",
    database:"newdb"
});

console.log("Database created...");

connection.query(
    'select * from student',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // results.forEach(function(data){
      //   console.log("ID = ",data.id);
      //   console.log("Name = ",data.name);
      // });
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  