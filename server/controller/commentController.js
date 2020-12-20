import Comment from '../model/comment';

export default class commentController {
    static async findAll(req, res) {
        try {
            const comments = await Comment.find();
            res.status(200).json({
                message: "listing all comment",
                data: comments,

            });

        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
    static async delete(req, res) {
        try {
            await res.commen.remove();
            res.status(200).json({
                message: "comment deleted successful",
            });
        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
}