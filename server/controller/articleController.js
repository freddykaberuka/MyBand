import Article from '../model/article';

export default class articleController {
    static async findAll(req, res) {
        try {
            const articles = await Article.find();
            res.status(200).json({
                message: "listing all Articles",
                data: articles,

            });

        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
    static findOne(req, res) {
        res.status(200).json({
            message: "selected by id",
            data: res.art,
        });
    }
    static async delete(req, res) {
        try {
            await res.art.remove();
            res.status(200).json({
                message: "article deleted successful",
            });
        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
}