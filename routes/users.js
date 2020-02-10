const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.send('Welcome login page'));
//register Page
router.get('/register', (req, res) => res.send('Welcome register page'));

module.exports = router;
