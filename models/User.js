const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define(
	'user',
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		date: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = User;
