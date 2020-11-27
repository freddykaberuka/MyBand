import express from 'express';
const router = express.Router();
import Article from '../model/article';
import Comment from '../model/comment';
import getArticle from '../middleware/getArticles';
import getComment from '../middleware/getComments';
import checkAuth from '../middleware/check_Auth.js';
import articleController from '../controller/articleController';
import commentController from '../controller/commentController';

router.get('/', articleController.findAll);
router.get('/comments', commentController.findAll);
router.post('/',checkAuth, async(req, res) => {
    const article = new Article({
        title: req.body.title,
        bodie: req.body.bodie,
        conclusion: req.body.conclusion,
    });

    try {
        const postArticle = await article.save();
        res.status(201).json({
            message: "post created",
            data: postArticle,

        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });

    }
});

router.post('/comments', checkAuth, async(req, res) => {
    const comment = new Comment({
        email: req.body.email,
        commenty: req.body.commenty,
    });

    try {
        const postComment = await comment.save();
        res.status(201).json({
            message: "post created",
            data: postComment,

        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });

    }
});

router.get("/:articleid", getArticle, articleController.findOne);
router.delete("/:articleid", checkAuth,getArticle, articleController.delete);
router.delete("/comments/:commentid",checkAuth, getComment, commentController.delete);
router.patch('/:articleid', getArticle,checkAuth,   async(req, res) => {
    const { title, bodie, conclusion } = req.body;
    if (title != null) {
        res.art.title = title;
    }
    if (bodie != null) {
        res.art.bodie = bodie;
    }
    if (conclusion != null) {
        res.art.conclusion = conclusion;
    }
    try {
        const updateone = await res.art.save();
        res.status(200).json({
            message: "blog is updated",
            data: updateone,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});
module.exports = router;