import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../features/employees/employeeSlice";

function EmployeeForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { firstName, lastName, salary };
    dispatch(createEmployee(newEmployee));
    // Reset form fields
    setFirstName("");
    setLastName("");
    setSalary("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </label>
      <button type="submit">Create Employee</button>
    </form>
  );
}

export default EmployeeForm;
