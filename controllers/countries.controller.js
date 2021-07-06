const db = require("../models");
const Countries = db.countries;

exports.findAll = (req, res) => {

    Countries.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving countries."
        });
      });
  };