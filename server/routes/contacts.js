import express from 'express';
const router = express.Router();
import Contact from '../model/contact';
import getContact from '../middleware/getContact';
import contactController from '../controller/contactController';
require('dotenv').config()



router.get('/', contactController.findAll);
router.post('/', async(req, res) => {
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


router.get("/:contactid", getContact, contactController.findOne);
router.delete("/:contactid", getContact, contactController.delete);



module.exports = router;