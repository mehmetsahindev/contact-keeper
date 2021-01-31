const User = require('./User');
const Contact = require('./Contact');
const db = require('../config/db');
const config = require('config');

const Models = () => {
	User.hasMany(Contact, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	});
	Contact.belongsTo(User);
};

module.exports = Models;
