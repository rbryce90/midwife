module.exports = {
    getCustomers: (req, res) => {
        const db = req.app.get('db');
        db.get_customers().then(clients => res.status(200).send(clients))
    }
}