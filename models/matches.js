modeule.exports = function(sequelize, DataTypes) {
	var Matches = sequelize.define ("Matches", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		user1_id: {
			type: DataTypes.UUID, //?? //BRING IN THE ID (FOREIGN ID) from the user's ID in the USER TABLE..
			FOREIGNKEY...
			allowNull: false
		},
		user1_Response: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		} 
		user2_id: {
			type: DataTypes.ID, //// BRING IN THE ID (FOREIGN ID) from the user's ID in the USER TABLE..
		},
		user2_Response: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: DataTypes.DATE,
		deleted_at: DataTypes.DATE
	},
	{
		underscored: true// The TRUE setting indicates that the COLUMN NAMES of the DB are in "SNAKE_CASE"
		// rather than camelCase..
	},
	{
		freezeTableName: true // THE TRUE setting here will ensure that the MODEL/TABLE NAME will be
		   // registered as written above, thus the comp will not expect it to have any default values, 
		  // such as capitalization, etc.
	});

	return Matches;
	
};