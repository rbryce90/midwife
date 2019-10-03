module.exports = {
  getClasses: (req, res) => {
    const db = req.app.get("db");
    db.get_classes().then(classes => res.status(200).then(classes))
  }
};
