'use strict';

module.exports = function(app){
    var jsonku = require('./controller');


    //halaman index
    app.route('/')
        .get(jsonku.index);
    //menampilkan semua data user
    app.route('/data-user')
        .get(jsonku.datauser);
    //menampilkan data user by ID
    app.route('/data-user/:id')
        .get(jsonku.datauserbyid);
    //menambah data user
    app.route('/tambah-user')
        .post(jsonku.tambahuser);
    //mengubah data user by ID
    app.route('/ubah-user/:id')
        .put(jsonku.ubahuser);
    //menghapus data user by ID
    app.route('/hapus-user/:id')
        .delete(jsonku.hapususer);
    
    
//PRODUK SECTION 
    //menampilkan semua data produk
    app.route('/data-produk')
        .get(jsonku.dataproduk);
    //menampilkan data produk by ID
    app.route('/data-produk/:id')
        .get(jsonku.dataprodukbyid);
    //menambah data produk
    app.route('/tambah-produk')
        .post(jsonku.tambahproduk);
    //mengubah data produk by ID
    app.route('/ubah-produk/:id')
        .put(jsonku.ubahproduk);
    //menghapus data produk by ID
    app.route('/hapus-produk/:id')
        .delete(jsonku.hapusproduk);
    //menampilkan detail produk
    app.route('/detail-produk/:id')
        .get(jsonku.detailproduk);
}