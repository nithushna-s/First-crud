// Importing the Mongoose library for working with MongoDB in Node.js.
const mongoose = require('mongoose');
//  like a blue print blueprint that defines the structure and rules for organizing and validating data in a database.
const dataSchema = new mongoose.Schema({
    // Defining a data schema using Mongoose, specifying properties like 'name' - string and 'age' -number
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})
// module.exports =module.exports allows you to share code or data from one module (file) with another module in your Node.js application.
// Combines name and schema to create a Mongoose model for 'Data' collection.--mongoose.model('Data', dataSchema)
//  It's a Mongoose function to create a model, representing a MongoDB collection--.mongoose.model
//  Specifies the name of the model or collection in MongoDB-Data
// Combines name and schema to create a Mongoose model for 'Data' collection.-dataSchema
module.exports = mongoose.model('Data', dataSchema)