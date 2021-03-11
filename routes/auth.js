const express = require("express");


const authController = require('../controllers/auth');

const router = express.Router();

router.post('/register', authController.register);

// router.get('/register', (req, res) => {


//     res.render('register');

// });

// router.get('/login', (req, res) => {


//     res.render('login');

// });

module.exports = router;