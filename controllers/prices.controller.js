const db = require("../models");
const Prices = db.prices;

exports.findAll = (req, res) => {

    Prices.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving prices!"
        });
      });
  };