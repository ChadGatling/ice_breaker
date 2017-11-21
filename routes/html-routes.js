// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  
  //static assets folder 
  app.use(express.static("public"));

  // signup route loads signIn.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "./signUp.html"));
  });

  // signin route loads signIn.html
  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "./signIn.html"));
  });

  // profile route loads tags.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "./tags.html")); 
  });

  // breaktheice route loads breakTheIce.html
  app.get("/breaktheice", function(req, res) {
    res.sendFile(path.join(__dirname, "./breakTheIce.html"));
  });

  // meet route loads meet.html
  app.get("/meet", function(req, res) {
    res.sendFile(path.join(__dirname, "./meet.html"));
  });

  //default to main.html
  app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "./main.html"));
  });

};

