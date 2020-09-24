'use strict';

var response = require('./res');
var connection =  require('./connection');
const conn = require('./connection');

//menampilkan index
exports.index = function(req, res){
    response.ok("Aplikasi Berjalan",res)
};

//menampilkan semua data user
exports.datauser = function(req, res){
    connection.query("SELECT * FROM user", function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

//menampilkan data user by ID
exports.datauserbyid = function(req, res){
    let id = req.params.id;
    connection.query("SELECT*FROM user WHERE id_user=?",[id],
        function(error, rows, fields){
            if(error){
                connection.log(error);
            }else{
                response.ok(rows, res);
            }
        }
    )
}