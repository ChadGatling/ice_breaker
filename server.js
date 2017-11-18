// Server.js - This file is the initial starting point for the Node/Express server.


//Dependencies (General)
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Express-App Setup 
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requires "db" from our models folder (insie index.js) to for syncing purposes
// ================================================================================
var db = require("./models");

//Data parsing by Express (Set-up)
// ======================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory Reference
// ======================================
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/meet-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() { //FORCING Sequelize to automatically sync!!
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
