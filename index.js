// import  external modules in my application-require
// config() - it loads the values from a file named .env
// dotenv - keep sensitive information in secrete
require('dotenv').config();
// express - it's a freamwork helping for all crud works
const express = require('express');
// mongoose - simplifies MongoDB interactions, offering schemas, CRUD, and connection management.
const mongoose = require('mongoose');
//Assigns the MongoDB connection
const mongoString = process.env.DATABASE_URL;
// Connects to a MongoDB database using a given connection address.
mongoose.connect(mongoString);
// Creates a reference to the MongoDB connection.
const database = mongoose.connection;
// Logs an error if there's a connection issue.
database.on('error', (error) => {
    console.log(error)
})
// Logs a message once the connection is successfully established.
database.once('connected', () => {
    console.log('Database Connected');
})
// This code creates a website
const app = express();
//  handling JSON data.
app.use(express.json());
//  using Express on port 3000
app.listen(3000, () => {
 console.log(`Server Started at ${3000}`)
});
//  It also sets up additional routes from a file at './routes/routes' 
const routes = require('./routes/routes');
const employeeRoutes = require('./routes/employeeRoutes');
//  '/api' path.
app.use('/api', routes)
app.use('/api/employees', employeeRoutes);