import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../features/employees/employeeSlice";

function EmployeeEditPopup({ employee }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    firstName: employee.firstName,
    lastName: employee.lastName,
    salary: employee.salary,
  });

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateEmployee({ _id: employee._id, ...updatedFields }));
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleTogglePopup}>Edit</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Edit Employee</h2>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={updatedFields.firstName}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={updatedFields.lastName}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Salary:
              <input
                type="text"
                name="salary"
                value={updatedFields.salary}
                onChange={handleFieldChange}
              />
            </label>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleTogglePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeEditPopup;
