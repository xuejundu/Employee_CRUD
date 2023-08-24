import React, { useState } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteEmployee } from "../../features/employees/employeeSlice";
import { useDispatch } from "react-redux";
import EmployeeDetailsPopup from "../EmployeeDetailsPopup/EmployeeDetailsPopup";

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

  return (
    <>
      <TableRow onClick={handleRowClick}>
        <TableCell>{employee.firstName}</TableCell>
        <TableCell>{employee.lastName}</TableCell>
        <TableCell>{employee.salary}</TableCell>
        <TableCell>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <EmployeeDetailsPopup
        open={openPopup}
        handleClose={handleClosePopup}
        employee={employee}
        handleUpdate={() => {
          // Handle update action
          handleClosePopup();
        }}
        handleDelete={() => {
          // Handle delete action
          handleDelete();
        }}
      />
    </>
  );
};

export default EmployeeItem;
