const express = require('express');
const db = require('./config/db');

const Models = require('./models/Models');

const app = express();

// Connect Database
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));

Models();
// Sync tables
db.sync().then(() => {
	console.log('All tables created');
});

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the ContactKeeper API.' })
);

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
