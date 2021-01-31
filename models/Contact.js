const Sequelize = require('sequelize');
const db = require('../config/db');

const Contact = db.define(
	'contact',
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		phone: {
			type: Sequelize.STRING,
		},
		type: {
			type: Sequelize.STRING,
			defaultValue: 'personal',
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

module.exports = Contact;
