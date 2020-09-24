'use strict';

module.exports = function(app){
    var jsonku = require('./controller');


    //halaman index
    app.route('/')
        .get(jsonku.index);
}