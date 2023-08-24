import { useState } from "react";
import "./EmployeeTable.css";

function EmployeeTable() {
  // test
  const employeeData = [
    { id: 1, firstName: "John", lastName: "Doe", salary: 60000 },
    { id: 2, firstName: "Jane", lastName: "Smith", salary: 70000 },
  ];
  const [employees, setEmployees] = useState(employeeData);

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
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
