var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//Admin Page
router.get('/api/v1/admin', verifikasi(), auth.halamanadmin);


module.exports = router;