import Contact from '../model/contact';

async function getContact(req, res, next) {
    let contac;
    try {
        contac = await Contact.findById(req.params.contactid);
        if (contac == null) {
            return res.status(404).json({
                message: 'data not found',
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
    res.contac = contac;
    next();

}
export default getContact;
