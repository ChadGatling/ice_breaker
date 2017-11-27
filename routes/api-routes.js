// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
console.log("connected");
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all users
  app.get("/api/all", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.User.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a user
  app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    db.user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: "male",
      age: req.body.age,
      ageRangeHigh: 35,
      ageRangeLow: 21,
      phoneNumber: req.body.phoneNumber,
      sexualPref: "female",
      language: "English",
      interests: "cars boats planes submarines guns freedom beef fire jeeps monkeys"
    }).then(function(results) {
      // `results` here would be the newly created user
      res.redirect("/profile");
    });

  });

};