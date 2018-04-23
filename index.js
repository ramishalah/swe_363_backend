const express = require('express');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');


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


// to serve the static files
app.use(express.static('images'));

// app.post('/api/login', (req, res) => {
//     // Mock user (request with data base and then you get the user back)
//     const user = {
//         id: 1,
//         username: "rami",
//         email: "rami@gmail.com"
//     };
//    jwt.sign({user:user}, 'helloworld', function (err, token) {
//        res.json({
//            token: token
//        })
//    });
// });


// Verify token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if (bearerHeader) {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // proceed
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}


// to  get all the faculty table
app.get('/faculty', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from faculty';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});


// to  get all the admin table
app.get('/admin', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from admin';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to  get all the author table
app.get('/author', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from author';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// to  get all the education table
app.get('/education', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from education';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});
// to  get all the membership table
app.get('/membership', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from membership';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// to  get all the phone_number table
app.get('/phone_number', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from phone_number';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });
});

// to  get all the publication table
app.get('/publication', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from publication';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to  get all the skill table
app.get('/skill', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from skill';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to  get all the work_experience table
app.get('/work_experience', verifyToken, function (req, res) {

    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'select * from work_experience';
            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to get the a specific faculty member
app.get('/faculty/:facultyId', function (req, res) {

    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from faculty where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to get the a specific education.
app.get('/education/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from education where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// to get the a specific membership.
app.get('/membership/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from membership where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});


// to get the a specific phone numbers.
app.get('/phoneNumber/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from phone_number where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });
});

// to get the a specific publication.
app.get('/publication/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {

            var sql = `select * from publication where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });


});

// to get the a specific skill.
app.get('/skill/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from skill where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// to get the a specific work_experience.
app.get('/workExperience/:facultyId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from work_experience where id_faculty = ${req.params.facultyId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// to get the a specific authors.
app.get('/author/:publicationId', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = `select * from author where id_publication = ${req.params.publicationId}`;

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// To search for a faculty by last name
app.get('/searchByFacultyLastName/:lastName', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = "select * from `faculty` f where `f`.`last_name` = " + "\'" + req.params.lastName + "\'" + " AND `f`.`approved` = 1";

            con.query(sql, function (err, rows, fields) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })
        }
    });

});

// To approve a specific faculty
app.put('/approveFaculty', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'UPDATE `faculty` SET `approved` = 1 WHERE `id_faculty` = ?';

            con.query(sql, [req.body.id_faculty], function (err, rows, fields) {
                if (parseInt(rows.affectedRows) == 0) {
                    res.status(400).send("Id not found");
                } else {
                    res.send("Successful");
                }
            })
        }
    });

});

// To approve a specific faculty
app.put('/disapproveFaculty', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {

            var sql = 'UPDATE `faculty` SET `approved` = 0 WHERE `id_faculty` = ?';

            con.query(sql, [req.body.id_faculty], function (err, rows, fields) {
                if (parseInt(rows.affectedRows) == 0) {
                    res.status(400).send("Id not found");
                } else {
                    res.send("Successful");
                }
            })
        }
    });

});

// To get all the appending faculty
app.get('/appendingPortfolio', verifyToken, function (req, res) {
    jwt.verify(req.token, 'helloworld', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var sql = 'SELECT * from faculty WHERE approved = 0';

            con.query(sql, function (err, rows, fields) {
                if(err) {
                    res.send(err);
                } else {
                    res.send(rows);
                }
            })


        }
    });
});



// For Sign up
app.post('/signup', function (req, res) {

    var table_data = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };


    var sql = 'INSERT INTO faculty SET ?';

    con.query(sql, table_data, function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            var id = rows.insertId;
            jwt.sign({data: id}, 'helloworld', function (err, token) {
                res.json({
                    token: token,
                    id_faculty: id
                })
            });
        }
    })
});

// For sign in
app.post('/signin', function (req, res) {

    var sql = 'SELECT * FROM faculty where email = ?';

    con.query(sql, [req.body.email], function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {

            if (rows.length > 0) {
                if (req.body.password == rows[0].password) {
                    jwt.sign({data: rows[0].id_faculty}, 'helloworld', function (err, token) {
                        res.json({
                            token: token,
                            id_faculty: rows[0].id_faculty
                        })
                    });
                } else {
                    res.status(400).send("Incorrect password");
                }
            } else {
                console.log(rows);
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
