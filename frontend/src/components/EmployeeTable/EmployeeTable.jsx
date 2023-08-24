import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
  Typography,
  TablePagination,
} from "@mui/material";
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

  // Add Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Adjust as needed

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          {employees.slice(startIndex, endIndex).map((employee) => (
            <EmployeeItem key={employee._id} employee={employee} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default EmployeeTable;
