const express = require('express');
const router = express.Router();
const User = require('./models/user');
const path = require('path');
const app = express();

app.use(express.static('/public'));

router.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname + '/public/login.html'));
});
router.get('/home', function (req, res) {
    return res.sendFile(__dirname + '/public/home.html');
});
router.get('/register', function (req, res) {
    return res.sendFile(__dirname + '/public/register.html');
});
router.get('/login', function (req, res) {
    return res.sendFile(__dirname + '/public/login.html');
});

router.post('/register', function (req, res, next) {
    if (req.body.password !== req.body.passwordConf) {
        let err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords don't match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        let userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        };

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/home');
            }
        });
    }
});

router.post('/login', function (req, res, next) {
    if (req.body.username && req.body.password) {
        User.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong username or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/home');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});

router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/login');
            }
        });
    }
});

module.exports = router;