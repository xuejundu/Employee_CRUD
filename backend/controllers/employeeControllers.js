const asyncHandler = require("express-async-handler");

const Employee = require("../models/employeeModel");

// @description get all employees
// @route GET /employee
const getEmployee = asyncHandler(async (req, res) => {
  const employees = await Employee.find();

  res.status(200).json({ message: employees });
});

// @description create an employee
// @route POST /employee
const createEmployee = asyncHandler(async (req, res) => {
  const { firstname, lastname, salary } = req.body;

  // check if all fields are filled
  if (!firstname || !lastname || !salary) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if employee exists
  const employeeExists = await Employee.findOne({
    firstname: firstname,
    lastname: lastname,
    salary: salary,
  });
  if (employeeExists) {
    res.status(400);
    throw new Error("Employee already exists");
  }

  // create employee entry
  const employee = await Employee.create({
    firstname,
    lastname,
    salary,
  });

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      firstname: employee.firstname,
      lastname: employee.lastname,
      salary: employee.salary,
    });
  } else {
    res.status(400);
    throw new Error("Invalid employee data");
  }
});

// @description update an employee entry
// @route PUT /employee/:id
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }
  console.log(req.params.body);
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: updatedEmployee });
});

// @description delete an employee
// @route DELETE /employee/:id
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }

  const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: deletedEmployee });
});

module.exports = {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
