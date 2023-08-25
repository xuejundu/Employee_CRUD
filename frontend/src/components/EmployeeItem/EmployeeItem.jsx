import React, { useState } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteEmployee,
  updateEmployee,
} from "../../features/employees/employeeSlice";
import { useDispatch } from "react-redux";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import "./EmployeeItem.css";

const EmployeeItem = ({ employee }) => {
  const dispatch = useDispatch();

  const [openPopup, setOpenPopup] = useState(false);

  const handleRowClick = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleDelete = () => {
    dispatch(deleteEmployee(employee._id));
    setOpenPopup(false);
  };

  const handleUpdate = (updatedEmployeeData) => {
    dispatch(updateEmployee({ _id: employee._id, ...updatedEmployeeData }));
    handleClosePopup();
  };

  return (
    <>
      <TableRow onClick={handleRowClick}>
        <TableCell>{employee.firstName}</TableCell>
        <TableCell>{employee.lastName}</TableCell>
        <TableCell>
          {employee.salary.toLocaleString(undefined, {
            style: "currency",
            currency: "USD",
          })}
        </TableCell>
        <TableCell>
          <IconButton color="secondary" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <EmployeeForm
        open={openPopup}
        onClose={handleClosePopup}
        onSubmit={handleUpdate}
        title={"Update Employee"}
        employee={employee}
      />
    </>
  );
};

export default EmployeeItem;
