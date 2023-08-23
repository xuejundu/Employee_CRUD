// @description get all employees
// @route GET /employee
const getEmployee = (req, res) => {
  res.status(200).json({ message: "get employee" });
};

// @description create an employee
// @route POST /employee
const createEmployee = (req, res) => {
  res.status(200).json({ message: "create employee" });
};

// @description update an employee entry
// @route PUT /employee/:id
const updateEmployee = (req, res) => {
  res.status(200).json({ message: "update employee" });
};

// @description delete an employee
// @route DELETE /employee/:id
const deleteEmployee = (req, res) => {
  res.status(200).json({ message: "delete employee" });
};

module.exports = {
  createEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployee,
};
