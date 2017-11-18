//Models - models in Database (reference to the DB Tables),
//Views - views by public (reference to the html pages/ Front-end Content),
//Controller - routues-contoller (refers to the )

'use strict';


// Dependency / Requires 
//===================================================================================================
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {}; //cfeate empty db object


// DATABASE SELECTION  -->> Locates DB Source, 
    //depending on whether the (REMOTE) process enviornment exitst, 
        //and if not, defauls the DB Connection to the local.
//======================================================================================================
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// File-System Process
//========================================================================================================
fs
  .readdirSync(__dirname) //this reads and syncs to the directory name selected (if not mentioned specifically, default === current directory)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); //FS (FileSystem) Method that filters through files and locates the js files..
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file)); //FS (FileSystem) Method that imports the js files (the model files) in the Config Directory...
    db[model.name] = model; //this establishes a KEY into the above db OBJECT, this key === the imported imported js file (the model files) in Config...
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {// IF TRUTHY, IF the model name HAS an associate property, then...
    db[modelName].associate(db); //..review this further!!!
  }
});


// FILLS AND EXPORTS THE "db", by setting the parameters of object "db" to the sequelize db environment and sequelize tables/model files(includes all updates/revisions/changes..)
//=====================================================================================================================
db.sequelize = sequelize; //this references the DB Environment
db.Sequelize = Sequelize; // this references the Sequelize npm packages and thus all the methods and use cases in the js files..

module.exports = db;
