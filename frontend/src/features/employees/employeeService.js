import axios from "axios";

const BASE_URL = "/employees/";

// create an employee
const createEmployee = async (employeeData) => {
  const response = await axios.post(BASE_URL, employeeData);
  return response.data;
};

// get all employees
const getEmployees = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// update an employee
const updateEmployee = async (employeeData) => {
  const response = await axios.put(
    BASE_URL + employeeData._id.toString(),
    employeeData
  );
  return response.data;
};

// delete an employee
const deleteEmployee = async (employeeId) => {
  const response = await axios.delete(BASE_URL + employeeId);
  return response.data;
};

const employeeService = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};

export default employeeService;
