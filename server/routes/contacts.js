import express from 'express';
import Contact from '../model/contact';
import getContact from '../middleware/getContact';
import checkAuth from '../middleware/check_Auth.js';
import contactController from '../controller/contactController';

const router = express.Router();
require('dotenv').config();



router.get('/', checkAuth, contactController.findAll);
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment,
    });

    try {
        const postContact = await contact.save();
        res.status(201).json({
            message: "message sent",
            data: postContact,

        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });

    }
});


router.get("/:contactid", checkAuth, getContact, contactController.findOne);
router.delete("/:contactid", checkAuth, getContact, contactController.delete);



module.exports = router;
