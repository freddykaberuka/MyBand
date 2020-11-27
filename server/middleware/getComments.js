import Comment from '../model/comment';
async function getComment(req, res, next) {
    let commen;
    try {
        commen = await Comment.findById(req.params.commentid);
        if (commen == null) {
            return res.status(404).json({
                message: 'data not found',
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    res.commen = commen;
    next();

}
export default getComment;