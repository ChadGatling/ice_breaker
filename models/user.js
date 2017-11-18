module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, //set to REFERENCE the Universal-Unique-ID est above... 
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    required: true
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Woman", "Man", "TransWoman", "TransMan"],
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genderPreference: {
    type: DataTypes.ENUM,
    values: ["Woman", "Man", "TransWoman", "TransMan"],
    allowNull: false
  },
  agePrefCeiling: DataTypes.INTEGER,
  
  agePrefFloor: DataTypes.INTEGER,

  nativeLang: {
    type: DataTypes.ENUM,
    values: ["English", "French", "Spanish", "Italian", "Portugese", "Dutch", "Norweigan", "Swedish", "Finnish", "German", "Russian", "Mandarin", "Vietnamese","Korean", "Japanese", "Farci", "Arabic", "Hindi"]
    allowNull: false
  },
  iceBreakers: {
    type: DataTypes.ENUM,
    values:[], //this should be set to be the "ice-breaker" points of interest!!
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE
}, 
{
  underscored: false //SET TO TRUE IF WOULD LIKE to indicate that the COLUMN NAMES of the DB are in "SNAKE_CASE"
  // rather than camelCase..
},
{
  freezeTableName: true //// THE TRUE setting here will ensure that the MODEL/TABLE NAME 
   // will be registered as written above, thus the comp will not expect it to have any default values, 
  // such as capitalization, etc.
});

return User;

};