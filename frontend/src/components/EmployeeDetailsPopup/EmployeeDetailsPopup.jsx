import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../features/employees/employeeSlice";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

function EmployeeDetailsPopup({
  open,
  handleClose,
  employee,
  handleUpdate,
  handleDelete,
}) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    firstName: employee.firstName,
    lastName: employee.lastName,
    salary: employee.salary,
  });

  // const handleTogglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  // const handleFieldChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedFields((prevFields) => ({
  //     ...prevFields,
  //     [name]: value,
  //   }));
  // };

  // const handleUpdate = () => {
  //   dispatch(updateEmployee({ _id: employee._id, ...updatedFields }));
  //   setShowPopup(false);
  // };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Employee Details</DialogTitle>
      <DialogContent>
        <Typography>First Name: {employee.firstName}</Typography>
        <Typography>Last Name: {employee.lastName}</Typography>
        <Typography>Salary: {employee.salary}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdate} color="primary">
          Update
        </Button>
        <Button onClick={handleDelete} color="secondary">
          Delete
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmployeeDetailsPopup;
