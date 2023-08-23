const express = require("express");
const router = express.Router();
const {
  createEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployee,
} = require("../controllers/employeeControllers");

router.route("/").get(getEmployee).post(createEmployee);
router.route("/:id").put(updateEmployee).delete(deleteEmployee);

module.exports = router;
