const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//parse routes
var routes = require('./routes');
routes(app);

app.listen(3001, () => {
    console.log(`Aplikasi berjalan di port 3000`);
});