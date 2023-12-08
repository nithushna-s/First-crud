const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  work: String,
  place: String,
  salary: Number,
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;
