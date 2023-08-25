import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import CurrencyTextField from "../CurrencyTextField/CurrencyTextField";
import "./EmployeeForm.css";

const EmployeeForm = ({ open, onClose, onSubmit, title, employee }) => {
  const [firstName, setFirstName] = React.useState(employee.firstName);
  const [lastName, setLastName] = React.useState(employee.lastName);
  const [salary, setSalary] = React.useState(employee.salary);

  const resetForm = () => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setSalary(employee.salary);
  };

  const handleSubmit = () => {
    const updatedEmployee = { id: employee._id, firstName, lastName, salary };
    onSubmit(updatedEmployee);
    onClose();
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="form-title">{title}</DialogTitle>
      <DialogContent className="form-content">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              fullWidth
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              fullWidth
            />
          </Stack>
          <Stack>
            <CurrencyTextField
              type="number"
              label="Salary"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
              fullWidth
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeForm;
