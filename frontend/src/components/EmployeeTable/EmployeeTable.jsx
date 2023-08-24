import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  getEmployees,
  createEmployee,
} from "../../features/employees/employeeSlice";
import "./EmployeeTable.css";
// import Spinner from "../Spinner/Spinner";
import EmployeeCreateForm from "../EmployeeCreateForm/EmployeeCreateForm";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import EmployeeItem from "../EmployeeItem/EmployeeItem";

const EmployeeTable = () => {
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

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  const handleCreateClick = () => {
    setOpenCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
  };

  const handleCreateEmployee = (employeeData) => {
    const newEmployee = employeeData;
    dispatch(createEmployee(newEmployee));
    handleCloseCreateDialog();
  };

  return (
    <>
      <div className="create-employee">
        <Typography variant="h6" color="secondary">
          EMPLOYEE
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateClick}
          className="btn"
        >
          Create Employee
        </Button>
      </div>
      <EmployeeCreateForm
        open={openCreateDialog}
        handleClose={handleCloseCreateDialog}
        handleSubmit={handleCreateEmployee}
      />
      <Table size="small" className="employee-table">
        <TableHead>
          <TableRow>
            <TableCell width="30%">First Name</TableCell>
            <TableCell width="30%">Last Name</TableCell>
            <TableCell width="30%">Salary</TableCell>
            <TableCell width="10%"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <EmployeeItem key={employee._id} employee={employee} />
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more employees
      </Link> */}
    </>
  );
};

export default EmployeeTable;
