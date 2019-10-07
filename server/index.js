const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const employees = require("./controllers/users");
const classes = require("./controllers/classes");
const certification = require("./controllers/certification");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  db.init();
  console.log("connected to db");
});

app.get("/", (req, res) => res.status(200).json("Working!!!!!!!"));

app.get("/api/users", employees.getEmployees);
app.get("/api/classes", classes.getClasses);
app.get("/api/class/:id", classes.getClass);
app.get("/api/certifications", certification.getCertification);

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port} bro!`);
});

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
