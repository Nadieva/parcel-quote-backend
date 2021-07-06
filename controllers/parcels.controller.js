const db = require("../models");
const Parcel = db.parcels;


exports.create = (req, res) => {
    if (!req.body.weight) {
      res.status(400).send({ message: "Weight is missing!" });
      return;
    }
  
    const parcel = new Parcel({
      weight: req.body.weight
    });

      parcel.save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the parcel."
        });
      });
  };

exports.findAll = (req, res) => {

    Parcel.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving parcels."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Parcel.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: `Parcel #${id} not found` });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: `Error while retrieving the parcel #${id}`});
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Parcel.findByIdAndUpdate(id, req.body)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update the parcel #${id}! It may not be found.`
          });
        } else res.send({ message: "Parcel was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: `Error while updating the parcel #${id}`
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Parcel.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete the parcel #${id}! It may not be found.`
          });
        } else {
          res.send({
            message: "Parcel was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot update the parcel #${id}!`
        });
      });
  };