module.exports = {
    getEmployees: (req, res) => {
        const db = req.app.get('db');
        db.get_employees().then(employees => res.status(200).send(employees))
    }
}