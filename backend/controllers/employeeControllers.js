const asyncHandler = require("express-async-handler");

const Employee = require("../models/employeeModel");

// @description get all employees
// @route GET /employee
const getEmployee = asyncHandler(async (req, res) => {
  const employees = await Employee.find();

  res.status(200).json(employees);
});

// @description create an employee
// @route POST /employee
const createEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, salary } = req.body;

  // check if all fields are filled
  if (!firstName || !lastName || !salary) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if employee exists
  const employeeExists = await Employee.findOne({
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  });
  if (employeeExists) {
    res.status(400);
    throw new Error("Employee already exists");
  }

  // create employee entry
  const employee = await Employee.create({
    firstName,
    lastName,
    salary,
  });

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
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

  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedEmployee);
});

// @description delete an employee
// @route DELETE /employee/:id
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }

  await Employee.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
