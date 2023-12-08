
const express = require('express');
const router = express.Router();
// imports the 'Model' from the employeeModel file path.
const EmployeeModel = require('../model/employeeModel');
module.exports = EmployeeModel;


router.post('/post', async (req, res) => {
  const data = new EmployeeModel({
    name: req.body.name,
    age: req.body.age,
    work: req.body.work,
    place: req.body.place,
    salary: req.body.salary
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Get all Method

//Get all Method
// /getAll file path
router.get('/getAll', async (req, res) => {
  // model find jeson 
  try{
      const data = await EmployeeModel.find();
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