const asyncHandler = require("express-async-handler");

// @description get all employees
// @route GET /employee
const getEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get employee" });
});

// @description create an employee
// @route POST /employee
const createEmployee = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("error");
  }
  res.status(200).json({ message: "create employee" });
});

// @description update an employee entry
// @route PUT /employee/:id
const updateEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update employee" });
});

// @description delete an employee
// @route DELETE /employee/:id
const deleteEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete employee" });
});

module.exports = {
  createEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployee,
};
