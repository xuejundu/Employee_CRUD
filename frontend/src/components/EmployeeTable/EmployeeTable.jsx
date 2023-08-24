import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  getEmployees,
} from "../../features/employees/employeeSlice";
import "./EmployeeTable.css";
import Spinner from "../Spinner";
import EmployeeEditPopup from "../EmployeeEditPopup/EmployeeEditPopup";

function EmployeeTable() {
  const { employees, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.employees
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getEmployees());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="employee-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>
                {/* <button>Edit</button> */}
                <EmployeeEditPopup employee={employee} />
                <button onClick={() => dispatch(deleteEmployee(employee._id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
