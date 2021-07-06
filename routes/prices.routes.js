module.exports = app => {
    const prices = require("../controllers/prices.controller");

    var router = require("express").Router();
    router.get("/", prices.findAll);
  
    app.use('/api/prices', router);
  };