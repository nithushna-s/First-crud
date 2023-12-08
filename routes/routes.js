// imports the 'Model' from the model file path.
const Model = require('../model/model');
//  imports the 'express' library for building web applications
const express = require('express');
//  creates a router using the 'express' library
// Router-Express creates a modular router object for defining routes.
const router = express.Router()
// exports the created router for use in other parts of the application
module.exports = router;

//req, res-req holds client's request data; res manages server-client communication, handling responses. we are use req=post   ,and res=get
// server-A server is a computer system handling network requests and responses.
// HTTP enables web data transfer, connecting clients and servers globally.
/*
Post:

HTTP method for submitting data.
Used for creating or updating resources.
Sends data in the request body.
Get:

HTTP method for retrieving data.
Used for reading resources.
Sends data in the request URL.*/

//Post Method//Post Method
// Defines a POST route at '/post' ,,,,,is like a file path 
// async-signals asynchronous code, allowing non-blocking operations
router.post('/post', async (req, res) => {
    // creates a 'data' instance using 'Model' with request data
    const data = new Model({
        // Extracts 'name' and 'age' from the request body.
        name: req.body.name,
        age: req.body.age
    })
// success 
    try {
        // Saves the data to the database using the 'save' method.
        // await== pauses for save completion.
        const dataToSave = await data.save();
        // Sends a JSON response with the saved data on success.
        res.status(200).json(dataToSave)
    }
    // Handles errors and sends a 400 status with error message JSON response.
    catch (error) {
        res.status(400).json({message: error.message})   
    }
})
//Get all Method
// /getAll file path
router.get('/getAll', async (req, res) => {
    // model find jeson 
    try{
        const data = await Model.find();
        res.json(data)
    }
    //  // Handles errors and sends a 500 status with error message JSON response .
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
// This route responds with the parameter 'id' from the URL.
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
// 
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
       //  Handles errors and sends a 400 status with error message JSON response .
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



//Delete by ID Method
// delete documents  or datas id use then message document (name) deleted
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
 //  Handles errors and sends a 400 status with error message JSON response .
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

