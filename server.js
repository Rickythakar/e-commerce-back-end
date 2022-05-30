const express = require('express');
// import sequelize connection
const sequelize = require('./config/connection')
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// Connect to the database before starting the Express.js server
// Force true to drop/recreate table(s) on every sync
// sequelize.sync({ force: true }).then(() => {
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
