const express = require('express');
const router = express.Router();const User = require('../model/User');
const passport = require('passport');

router.get('/register', (req, res) => {
    res.render('auth/signup');
});

router.post('/register', async (req, res) => {
    const { username, password, email, role } = req.body;
    const user = new User({ username, email, role });
    const newUser = await User.register(user, password);
    res.send(newUser);
});

module.exports = router;
