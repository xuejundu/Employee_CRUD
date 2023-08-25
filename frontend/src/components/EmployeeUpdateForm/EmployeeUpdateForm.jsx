import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Grid,
} from "@mui/material";

import "./EmployeeUpdateForm.css";

const EmployeeUpdateForm2 = ({
  open,
  handleClose,
  handleUpdate,
  handleDelete,
  employee,
}) => {
  let salary = 0;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="form-title">Employee Information</DialogTitle>
      <DialogContent className="form-content">
        <Formik
          initialValues={{
            firstName: employee.firstName,
            lastName: employee.lastName,
            salary: employee.salary,
          }}
          onSubmit={(values) => {
            const updateValue = { ...values, salary: salary };
            console.log(updateValue, "updateValue");
            handleUpdate(updateValue);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First Name"
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    fullWidth
                  />
                </Stack>
                <Field
                  as={TextField}
                  name="salary"
                  label="Salary"
                  type="number"
                  fullWidth
                />
              </Stack>
              <DialogActions>
                <Button color="primary" type="submit" disabled={isSubmitting}>
                  Update
                </Button>
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  onClick={() => handleDelete()}
                >
                  Delete
                </Button>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

const EmployeeUpdateForm = ({
  open,
  handleClose,
  handleUpdate,
  handleDelete,
  employee,
}) => {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [salary, setSalary] = useState(employee.salary);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="form-title">Employee Information</DialogTitle>
      <DialogContent className="form-content">
        <Grid>
          <TextField
            value={firstName}
            placeholder="First Name"
            label="First Name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={lastName}
            placeholder="Last Name"
            label="Last Name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <CustomCurrencyInput
          value={salary}
          placeholder="Salary"
          label="Salary"
          onChange={(value) => {
            setSalary(value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Grid>
          <Button
            color="primary"
            type="submit"
            onClick={() => handleUpdate({})}
          >
            Update
          </Button>
          <Button color="secondary" onClick={() => handleDelete()}>
            Delete
          </Button>
          <Button color="primary" onClick={() => handleClose()}>
            Cancel
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const CustomCurrencyInput = ({ value, onChange, ...props }) => {
  const formatCurrency = (value) => {
    const numericValue =
      parseFloat(value.toString().replace(/[^0-9.-]/g, "")) || 0;
    return `$${numericValue}`;
  };

  const handleValueChange = (event) => {
    const formattedValue = formatCurrency(event.target.value);
    onChange(formattedValue);
  };

  return (
    <TextField
      {...props}
      value={formatCurrency(value)}
      onChange={handleValueChange}
    />
  );
};

export default EmployeeUpdateForm;
