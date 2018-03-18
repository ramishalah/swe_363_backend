const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mysql = require('mysql');

// connecting to the clear db database
var con = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bd5e1294bfda78",
  password: "1ab708b1",
  database: "heroku_24f121bc0d498a9"
});


express()
  // to parse the request body
  .use(bodyParser.json())

  // for retrieving all the students
  .get('/helloworld', function(req, res, next){

      res.send("hello world");
  })



  //
  // .post('/addpreference', function(req, res, next){
  //   var instructorId = req.body.InstructorID;
  //   var courseCode = req.body.CourseCode;
  //
  //   var sql = `insert into preferences values('${courseCode}', ${instructorId}, 'inreview')`;
  //   con.query(sql, function (err, rows, fields) {
  //     if (err){
  //       if(err.code == "ER_DUP_ENTRY")
  //         res.status(400).send("Duplicate InstructorID and CourseCode");
  //       else if(err.code == "ER_NO_REFERENCED_ROW_2")
  //         res.status(400).send("InstructorID or course code does not exist");
  //       else
  //         res.status(400).send("JSON format is not correct");
  //     } else {
  //       res.send(req.body);
  //     }
  //
  //   });
  // })
  //
  // .put('/editpreference', function(req, res, next){
  //   var instructorId = req.body.InstructorID;
  //   var courseCode = req.body.CourseCode;
  //   var status = req.body.Status;
  //
  //   var sql = `update preferences set Status = '${status}' where InstructorID = ${instructorId} AND CourseCode = '${courseCode}'`;
  //   con.query(sql, function (err, rows, fields) {
  //     if (err)
  //       res.status(400).send("JSON format is not correct");
  //     else
  //       res.send(req.body);
  //   });
  // })
  // // to delete all the preferences table
  // .delete('/deletepreferences', function(req, res, next){
  //
  //   var sql = "TRUNCATE preferences";
  //   con.query(sql, function (err, rows, fields) {
  //     if (err) throw err;
  //     res.send("Deleted!");
  //   });
  // })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
