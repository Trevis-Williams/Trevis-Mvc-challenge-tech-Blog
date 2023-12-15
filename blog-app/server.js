const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import routes and database configuration
const routes = require('./controllers');
const sequelize = require('./config/config'); // This is the only time you should declare sequelize

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up session with Sequelize store
app.use(session({
  secret: 'super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Use routes
app.use(routes);

// Sync sequelize models and start Express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
