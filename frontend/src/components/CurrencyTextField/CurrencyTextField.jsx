import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const CurrencyTextField = ({ value, onChange, ...props }) => {
  const formatCurrency = (value) => {
    return value;
  };

  return (
    <TextField
      {...props}
      value={formatCurrency(value)}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  );
};

export default CurrencyTextField;
