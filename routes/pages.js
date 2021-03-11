const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('login');
});
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/error', (req, res) => {
    res.render('error');
});

module.exports = router;