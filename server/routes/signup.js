import express from 'express';
const router = express.Router();
import Signup from '../model/Signup';
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

module.exports = router;