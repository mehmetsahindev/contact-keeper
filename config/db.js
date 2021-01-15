const Sequelize = require('sequelize');
const config = require('config');
const db = config.get('database');

const { user, password, database, host } = db;

module.exports = new Sequelize(database, user, password, {
	host: host,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});
