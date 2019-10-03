module.exports = {
    getCertification: (req, res) => {
        const db = req.app.get('db');
        db.get_certification().then(certifications => res.status(200).send(certifications))
    }
}