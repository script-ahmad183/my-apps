var connection = require('../connection');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');
const e = require('express');

//registrasi
exports.registrasi = function(req, res){
    var post = {
        username : req.body.username,
        email : req.body.email,
        nama = req.body.nama,
        password = req.body.password,
        level = req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??";
    var table = ("user","email", post.email);

    query = mysql.format(query,table);

    connection.query(query, function(error,row){
        if(error){
            console.log(error);
        }else{
            if(rows.length==0){
                var query = "INSERT INTO ?? SET ?";
                var table = ['user'];
                query = mysql.format(query, table);
                connection.query(query,post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Registrasi berhasil!", res);
                    }
                });
            }else{
                response.ok("Email telah digunakan!", res);
            }
        }
    })
}