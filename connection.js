var mysql = require('mysql');

//connection
const conn = mysql.createConnection({
    host :"localhost",
    user :"root",
    password : "",
    database : "my-app"
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("Connetion Successfully");
});

module.exports = conn;