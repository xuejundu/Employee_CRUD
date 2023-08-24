import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../features/employees/employeeSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import "./EmployeeCreateForm.css";

const EmployeeCreateForm = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle color="primary" className="form-title">
        New Employee Information
      </DialogTitle>
      <DialogContent className="form-content">
        <Formik
          initialValues={{ firstName: "", lastName: "", salary: "" }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
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
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeCreateForm;
