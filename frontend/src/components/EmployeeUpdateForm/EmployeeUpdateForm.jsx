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
} from "@mui/material";

const EmployeeUpdateForm = ({
  open,
  handleClose,
  handleUpdate,
  handleDelete,
  employee,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle color="primary" className="form-title">
        Employee Information
      </DialogTitle>
      <DialogContent className="form-content">
        <Formik
          initialValues={{
            firstName: employee.firstName,
            lastName: employee.lastName,
            salary: employee.salary,
          }}
          onSubmit={(values) => {
            console.log(values);
            handleUpdate(values);
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

export default EmployeeUpdateForm;
