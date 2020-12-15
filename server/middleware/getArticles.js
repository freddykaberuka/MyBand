import Article from '../model/article';

async function getArticle(req, res, next) {
    let art;
    try {
        art = await Article.findById(req.params.articleid);
        if (art == null) {
            return res.status(404).json({
                message: 'data not found',
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    res.art = art;
    next();

}
export default getArticle;
