var jwt = require('jsonwebtoken');
var config = require('../config/secret');

function verifikasi(level){
    return function (req, res, next){
        var level = req.body.level;
        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
            //verifikasi
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return res.status(401).send({auth:false, message:"Token tidak ditemukan"});
                }else{
                    if(level==2){
                        req.auth=decoded;
                        next();
                    }else{
                        return res.status(401).send({auth:false, message:"Gagal autentikasi role"});
                    }
                }
            });
        }else{
            return res.status(401).send({auth:false, message:"Token tidak tersedia"});
        }
    }
}

module.exports = verifikasi;