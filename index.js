const express = require('express');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


// connecting to the clear db database
var con = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bd5e1294bfda78",
    password: "1ab708b1",
    database: "heroku_24f121bc0d498a9"
});


var app = express();

// to allow the cross origin thing.
app.use(cors());
// to parse the request body
app.use(bodyParser.json());

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};

// to serve the static files
app.use(express.static('images'));

// to  get all the faculty table
app.get('/faculty', function (req, res) {
    var sql = 'select * from faculty';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the admin table
app.get('/admin', function (req, res) {
    var sql = 'select * from admin';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the author table
app.get('/author', function (req, res) {
    var sql = 'select * from author';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the education table
app.get('/education', function (req, res) {
    var sql = 'select * from education';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});
// to  get all the membership table
app.get('/membership', function (req, res) {
    var sql = 'select * from membership';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the phone_number table
app.get('/phone_number', function (req, res) {
    var sql = 'select * from phone_number';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the publication table
app.get('/publication', function (req, res) {
    var sql = 'select * from publication';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the skill table
app.get('/skill', function (req, res) {
    var sql = 'select * from skill';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to  get all the work_experience table
app.get('/work_experience', function (req, res) {
    var sql = 'select * from work_experience';
    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific faculty member
app.get('/faculty/:facultyId', function (req, res) {
    var sql = `select * from faculty where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific education.
app.get('/education/:facultyId', function (req, res) {
    var sql = `select * from education where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific membership.
app.get('/membership/:facultyId', function (req, res) {
    var sql = `select * from membership where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});


// to get the a specific phone numbers.
app.get('/phoneNumber/:facultyId', function (req, res) {
    var sql = `select * from phone_number where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific publication.
app.get('/publication/:facultyId', function (req, res) {
    var sql = `select * from publication where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific skill.
app.get('/skill/:facultyId', function (req, res) {
    var sql = `select * from skill where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific work_experience.
app.get('/workExperience/:facultyId', function (req, res) {
    var sql = `select * from work_experience where id_faculty = ${req.params.facultyId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// to get the a specific authors.
app.get('/author/:publicationId', function (req, res) {
    var sql = `select * from author where id_publication = ${req.params.publicationId}`;

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});

// To search for a faculty by last name
app.get('/searchByFacultyLastName/:lastName', function (req, res) {
    var sql = "select * from `faculty` f where `f`.`last_name` = " + "\'" + req.params.lastName + "\'";

    con.query(sql, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    })
});


// For Sign up
app.post('/signup', function (req, res) {

    var table_data =  {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };


    var sql = 'INSERT INTO faculty SET ?';

    con.query(sql, table_data,  function (err, rows, fields) {
        if(err) {
            res.send(err);
        } else {
            var id = rows.insertId;
            res.send(`${id}`);
        }
    })
});

// For sign in
app.post('/signin', function (req, res) {
    var sql = 'SELECT * FROM faculty where email = ?';

    con.query(sql, [req.body.email],  function (err, rows, fields) {
        if(err) {
            res.send(err);
        } else {

            if(rows.length > 0){
                if(req.body.password == rows[0].password){
                    res.send(rows);
                } else {
                    res.status(400).send("Incorrect password");
                }
            } else {
                res.status(400).send("Email does not exists");
            }
        }
    })

});



// app.post('/signup', function (req, res) {
//    var firstName = req.body.firstName;
//    var lastName = req.body.lastName;
//    var email = req.body.email;
//    var password = req.body.password;
//
//
//    var sql = "insert into `faculty` (`first_name`, `last_name`, `email`, `password`) values(" + "\'" +firstName + "\'" + "," + "\'" +  lastName + "\'" + "," + "\'" + email + "\'" + "," + "\'" + password + "\'"  + ")";
//
//    con.query(sql, function (err, rows, fields) {
//        if(err) {
//            res.send(err);
//        } else {
//            var id = rows.insertId;
//            res.send(`${id}`);
//        }
//    })
// });

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

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
