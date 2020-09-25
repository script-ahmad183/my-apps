const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));



//parse routes
var routes = require('./routes');
routes(app);

//parse reoutes from middleware/index
app.use('/auth', require('./middleware'));

app.listen(3001, () => {
    console.log(`Aplikasi berjalan di port 3000`);
});