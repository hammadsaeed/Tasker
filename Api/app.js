const express = require('express');
const mysql = require('mysql');
var app = express();
var cors =require ("cors");
var bodyParser = require('body-parser');
// Making a Coneection

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'Test_Assignment',
});

//Connet
db.connect((err)=>{
  if(err){
    console.log(err);
  }
  console.log("Connected to mysql")
});

//Create DB
/*
app.get('/createdb',(req,res)=>{
  let sql ='CREATE DATABASE primain';
  db.query(sql, (err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send("Database create....")
  });
});

//Creating table

app.get('/createpoststable',(req,res)=>{
  let sql ='CREATE TABLE MainTask(id int AUTO_INCREMENT,name VARCHAR(255),status VARCHAR(255),description VARCHAR(1000),PRIMARY KEY (id))';
  db.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send("Post table created..")
  });
});

//Getting data from phpmyadmin

 db.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});
*/
/*
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 res.header("Access-Control-Allow-Headers", "Origin", "X-Requested-With","Content-Type", "Accept");
 next();
 });
 */

app.get('/second', function(req, res){
  db.query("SELECT * FROM Main_table ",
   function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
  });
});

app.get('/primain', function(req, res){
  db.query("SELECT * FROM Main_table WHERE ParentID IS NULL",
   function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
  });
});

//get sub-tasks
app.get('/second/:id', function(req, res){
  db.query("SELECT * FROM Main_table WHERE ParentID = ?",[req.params.id],
   function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
  })
});
//get by PriID
app.get('/pri/:id', function(req, res){
  db.query("SELECT * FROM Main_table WHERE PrimaryID = ?",[req.params.id],
   function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
  })
});


app.get('/all/:id', function(req, res){
  db.query(`SELECT * FROM Main_table WHERE PrimaryID="${req.params.id}" OR ParentID= "${req.params.id}"`,
   function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
  });
});
//Creating a task
app.get('http://localhost:3000/',function(req,res,next){
  console.log(req)
  res.render('createfrom',{title: "Create Product"})
})

app.post('/create',function(req,res,next){
  var ParentID = req.body.ParentID;
  var Name = req.body.Name;
  var Description = req.body.Description;
  var Status = req.body.Status;
  if(ParentID === null || ParentID === 0){
  var sql=`INSERT INTO Main_table (Name,Description,Status) VALUES ("${Name}","${Description}","${Status}")`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
}else{
  var sql=`INSERT INTO Main_table (ParentID,Name,Description,Status) VALUES ("${ParentID}","${Name}","${Description}","${Status}")`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
}
})

app.post('/changeStatus-Pri',function(req,res,next){
  var PrimaryID = req.body.PrimaryID;
  var Status = req.body.Status;
  var sql =`UPDATE Main_table SET Status ="${Status}" WHERE PrimaryID = "${PrimaryID}"`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
});

app.post('/changeStatus-Par',function(req,res,next){
  var PrimaryID = req.body.PrimaryID;
  var Status = req.body.Status;
  var sql =`UPDATE Main_table SET Status ="${Status}" WHERE PrimaryID = "${PrimaryID}" OR ParentID = "${PrimaryID}"`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
});


app.post('/editTask',function(req,res,next){
  var ParentID = req.body.ParentID;
  var Name = req.body.Name;
  var Description = req.body.Description;
  var PrimaryID = req.body.PrimaryID
  if(ParentID === null){
  var sql =`UPDATE Main_table SET Name ="${Name}",Description ="${Description}" WHERE PrimaryID = "${PrimaryID}"`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
}else{
  var sql =`UPDATE Main_table SET Name ="${Name}",Description ="${Description}",ParentID ="${ParentID}" WHERE PrimaryID = "${PrimaryID}"`
  db.query(sql,function(err,result){
    if(err) console.log(err)
  })
}
})




app.listen('3000',()=>{
  console.log('Server started on port 3000')
})
