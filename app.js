const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
const uuid = require('uuid');
const { query } = require('express');
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false }));
app.use((req,res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorixation");
  res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,DELETE");
  next();
})
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.json());
// connect database 
const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student"
});
/*
import axios from 'axios';
const initState = axios.create({
    baseURL: 'https://localhost:3000/api',
    header: {'X-Customer-Header':'footer'}
});*/
  

// set data 
let students = [
  {'id':'1', 'name':'JeepWart', 'score': '99'},
  {'id':'2', 'name':'submition', 'score': '77'},
];
/*
initState.get("/user")
    .then(res =>{
      res.json(students);
  
      console.log("res:",res)
    }).catch(err =>{
        console.log(err)
    }) */
//  request get list  
app.get('/api/Student',function(req, res){
  if(students.length > 0){
    res.json(students);
  }else{
    res.status(400).send('NOT FOUND ANY STUDENT');
  }
});

//  request get by id 
app.get('/api/students/x:id',function(req, res){
  const id = req.params.id;
  const students = students.find(i => i.id === id);
  if(student){
    res.send(students);

  }else{
    res.status(400).send('NOT FOUND ANY STUDENT');
  }
});

//  post student
app.post('/api/students',function(req, res){
  const studentName = req.body.name;
  const studentScore = req.body.email;
  if(studentName.length <= 0){
    res.status(400).send('Error can not add student');

  }else{
    const student ={
      'id': uuid(),
      'name': studentName,
      'score': studentScore
    }
  }
  students.push(student);
  res.send(stedent);

});

// delete
app.delete('/api/students/:id',function(req,res){
  const id = req.params.id;
  const student =student.find(i =>i.id === id);
  if(student) {
    const index = student.indexOF(student);
    student.splice(index,1);
    res.send(student);
  }else{
    res.status(400).send('error cannot delete');
  }
});

//update
app.put('/api/students/:id',function(req,res){
  const id = req.params.id;
  const name = req.body.name;
  const score = req.body.score;
  if(name.length< 1){
    res.status(400).send('error to update');
  }else{
    let student = student.find(i => i.id === id);
    if(student){
      student.name = name;
      student.score = score;
      res.send(student);
    }else{
      res.status(400).send('cannot fild student to update')
    } 
  }
});

app.get('/api/updateList',(req,res) =>{
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO student (std_name, std_score) VALUES ?";
    var values = [
      ['John', 'Highway'],
      ['Peter', 'Lowstreet'],
      ['Amy', 'Apple'],
      ['Hannah', 'Mountain'],
     
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });

});

app.post('/api/register', (req,res) =>{
  const username = req.body.username;
  const password = req.body.password;

  /*
    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO member (username, password) VALUES ?";
    var values = [[username,password]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });*/
    con.query(
    "INSERT INTO member(username, password) VALUES (?,?)",
    [username,password],
    (err,result)=>{
      console.log(err);
    }
  );
});
app.post('/login',(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  con.query(
    "SELECT * FROM member WHERE username = ? AND password =?",
    [username,password],(err,result)=>{
      if(err){
        res.send({err:err});
      }
      if(result.length > 0){
          res.send(result);
      }else{
        res.send({message: "wrong username/password"});
      }
    }
  );
});
//886293
app.get('/api/data', (req, res) => {
  con.connect(function(err) {
  if (err) throw err;
    con.query("SELECT * FROM student", function (err, result, fields) {
      if (err) throw err;
        res.json(result);

      });
  });
});

//port ****
const port = process.env.port || 3000;
app.listen(port,function(){
  console.log('Listening on port', port);
});

     //https://kku-th.zoom.us/j/95368938456?pwd=QmlBMFFNYUVZdm9KMVphWnpUQ0RiZz09
        //JSON.stringify(result);
        //res.json(result[0].std_id);
        //res.send(JSON.stringify(result[0].std_id));
        //var list = [result[0].std_id,result[0].std_name,result[0].std_score];
 //       res.send(result);
        //res.json(list);
        //console.log(list);
 