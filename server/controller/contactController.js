import Contact from '../model/contact';

export default class contactController {
    static async findAll(req, res) {
        try {
            const contacts = await Contact.find();
            res.json({
                message: "listing all data from database",
                data: contacts,

            });

        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
    static findOne(req, res) {
        res.json({
            message: "selected by id",
            data: res.contac,
        });
    }
    static async delete(req, res) {
        try {
            await res.contac.remove();
            res.json({
                message: "article deleted successful",
            });
        } catch (err) {
            res.json({
                message: err.message,
            });
        }
    }
}