import express from 'express';
const router = express.Router();
import Signup from '../model/Signup';
import jwt from 'jsonwebtoken';
const bcrypt = require("bcrypt");


router.post('/signup', (req, res, next) => {


    //verifie if email exist
    Signup.find({
            email: req.body.email
        })
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "this email alread exist"
                });
            }
            //hashing password before the plain text reach to a server
            else {
                bcrypt.hash(req.body.password, 3, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                        //inserting new user
                    } else {
                        const user = new Signup({
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'user registered'
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
});

router.post('/login', (req, res, next) => {
    Signup.find({
            email: req.body.email
        })
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    error: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "1h"
                        }, );
                    return res.status(200).json({
                        message: "user authorized",
                        token: token
                    });
                }
                res.status(401).json({
                    error: "Auth failed"
                });
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;