module.exports = {
  getClasses: (req, res) => {
    console.log("getClasses");
    const db = req.app.get("db");
    db.get_classes().then(classes => {
      console.log(classes);
      res.status(200).send(classes);
    });
  }
};
