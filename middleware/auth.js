var connection = require('../connection');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');
const express = require('express'); 

//registrasi
exports.registrasi = function(req, res){
    var post = {
        username : req.body.username,
        email : req.body.email,
        nama : req.body.nama,
        password : md5(req.body.password),
        level : req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["user","email", post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error, rows){
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

// login
exports.login = function(req, res){
    var post = {
        password : md5(req.body.password),
        email : req.body.email
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "password", post.password, "email", post.email];

    query = mysql.format(query, table);
    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else{
           if(rows.length==1){
               var token = jwt.sign({rows}, config.secret, {
                   expiresIn:1440
               });
               id_user = rows[0].id_user;

               var data = {
                   id_user : id_user,
                   access_token : token,
                   ip : ip.address()
               }

               var query = "INSERT INTO ?? SET ?";
               var table = ['akses_token'];

               query = mysql.format(query, table);
               connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        res.json({
                            success:true,
                            message:'Token JWT tergenerate!',
                            token:token,
                            currUser:data.id_user
                        });
                    }
               });
           }else{
               res.json({"Error":true, "Message":"Email atau password salah!"});
           }
        }
    });
}

//Halaman Admin
exports.halamanadmin = function(req, res){
    response.ok("Admin Page", res);
}