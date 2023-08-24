import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../features/employees/employeeSlice";
import EmployeeUpdateForm from "../EmployeeUpdateForm/EmployeeUpdateForm";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const EmployeeUpdatePopup = ({ open, handleClose, employee, handleUpdate }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    firstName: employee.firstName,
    lastName: employee.lastName,
    salary: employee.salary,
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Employee</DialogTitle>
      <DialogContent>
        <EmployeeUpdateForm employee={employee} onUpdate={handleUpdate} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeUpdatePopup;
