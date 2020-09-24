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
}