module.exports = {
  getClasses: (req, res) => {
    console.log("getClasses");
    const db = req.app.get("db");
    db.get_classes().then(classes => {
      res.status(200).send(classes);
    });
  },
  getClass: (req, res) => {
    console.log("getClass");
    let {id} = req.params
    console.log(req.params.id)
    const db = req.app.get("db");
    db.get_class(id).then(oneClass => {
      console.log(oneClass);
      res.status(200).send(oneClass);
    });
  }
};
