'use strict';

var response = require('./res');
var connection =  require('./connection');
const conn = require('./connection');

//menampilkan index
exports.index = function(req, res){
    response.ok("Aplikasi Berjalan",res)
};


// //USER SECTION
// //menampilkan semua data user
// exports.datauser = function(req, res){
//     connection.query("SELECT * FROM user", function(error, rows, fields){
//         if(error){
//             console.log(error);
//         }else{
//             response.ok(rows, res);
//         }
//     })
// }

// //menampilkan data user by ID
// exports.datauserbyid = function(req, res){
//     let id = req.params.id;
//     connection.query("SELECT*FROM user WHERE id_user=?",[id],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error);
//             }else{
//                 response.ok(rows, res);
//             }
//         }
//     )
// }

//Menambah data user
// exports.tambahuser = function(req, res){
//     var username =  req.body.username;
//     var email =  req.body.email;
//     var nama = req.body.nama;
//     var password = req.body.password;
//     var level = req.body.level;

//     connection.query("INSERT INTO user (username, email, password, nama, level) VALUES (?, ?, ?, ?, ?)",
//         [username, email, password, nama, level],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error);
//             }else{
//                 response.ok("Data berhasil ditambah!", res);
//             }
//         }    
//     )
// }

// //Mengubah Data User by ID
// exports.ubahuser = function(req, res){
//     let id = req.params.id;
//     var username =  req.body.username;
//     var email =  req.body.email;
//     var nama = req.body.nama;
//     var password = req.body.password;
//     var level = req.body.level;

//     connection.query("UPDATE user SET username=?, email=?, password=?, nama=?, level=? WHERE id_user=?", [username, email, password, nama, level, id],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error);
//             }else{
//                 response.ok("Data berhasil diubah!", res);
//             }
//         }    
//     )
// }

// //menghapus data user by ID
// exports.hapususer = function(req, res){
//     let id = req.params.id;
//     connection.query("DELETE FROM user WHERE id_user=?",[id],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error);
//             }else{
//                 response.ok("Data berhasil dihapus!", res);
//             }
//         }
//     )
// }


//PRODUK SECTION
//menampilkan semua data produk
exports.dataproduk = function(req, res){
    connection.query("SELECT * FROM produk", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

//menampilkan data produkby ID
exports.dataprodukbyid = function(req, res){
    let id = req.params.id;
    connection.query("SELECT*FROM produk WHERE id_produk=?",[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        }
    )
}

//Menambah data user
exports.tambahproduk= function(req, res){
    var kode_produk =  req.body.kode_produk;
    var vendor =  req.body.vendor;
    var nama_produk = req.body.nama_produk;
    var deskripsi = req.body.deskripsi;
    var gambar_produk = req.body.gambar_produk;

    connection.query("INSERT INTO produk (kode_produk, nama_produk, vendor, deskripsi, gambar_produk) VALUES (?, ?, ?, ?, ?)",
        [kode_produk, nama_produk,vendor, deskripsi, gambar_produk],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil ditambah!", res);
            }
        }    
    )
}

//Mengubah Data produk by ID
exports.ubahproduk = function(req, res){
    let id = req.params.id;
    var kode_produk =  req.body.kode_produk;
    var nama_produk =  req.body.nama_produk;
    var vendor = req.body.vendor;
    var deskripsi = req.body.deskripsi;
    var gambar_produk = req.body.gambar_produk;

    connection.query("UPDATE produk SET kode_produk=?, nama_produk=?, deskripsi=?, vendor=?, gambar_produk=? WHERE id_produk=?", [kode_produk, nama_produk, deskripsi, vendor, gambar_produk, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil diubah!", res);
            }
        }    
    )
}

//menghapus data user by ID
exports.hapusproduk = function(req, res){
    let id = req.params.id;
    connection.query("DELETE FROM produk WHERE id_produk=?",[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil dihapus!", res);
            }
        }
    )
}

//menampilkan detail produk
exports.detailproduk = function(req, res){
    let id = req.params.id;
    connection.query("SELECT produk.*,detail_produk.* FROM detail_produk JOIN produk ON produk.id_produk=detail_produk.id_produk WHERE detail_produk.id_produk=?",[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.okdetailproduk(rows, res);
            }
        }
    )
}