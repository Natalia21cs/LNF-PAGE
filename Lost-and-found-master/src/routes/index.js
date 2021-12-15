const express = require('express');
const router = express.Router();

router.get('/inicio',(req, res) => {
    res.render('index.html', { title: 'Primer sitio Web'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});

router.get('/aviso', (req, res) => {
    res.render('aviso.html', {title: 'Contact Page'});
});
module.exports = router; 