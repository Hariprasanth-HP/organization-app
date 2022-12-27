import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Login.css";
import TextField from "@mui/material/TextField";
import image1 from "../images/image1.png";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Login = () => {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Paper className="login" elevation={3}>
        <div>
          <img className="loginimage" alt="" src={image1} />
          <h5>Add Employee</h5>
          <>
            <TextField
              // sx={{
              //   width: 300,
              // }}
              className="outlined-basic-half"
              InputProps={{ sx: { height: 40 } }}
              placeholder="Firts Name"
              variant="outlined"
            />
            <TextField
              className="outlined-basic-half"
              InputProps={{ sx: { height: 40 } }}
              placeholder="Last Name"
              variant="outlined"
            />
            <TextField
              InputProps={{ sx: { height: 40 } }}
              className="datepicker"
              placeholder="Mobile Number"
              variant="outlined"
            />
            <TextField
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-60"
              placeholder="Email"
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                className="datepicker"
                renderInput={(params) => (
                  <TextField className="datepicker" size="small" {...params} />
                )}
              />
            </LocalizationProvider>
            <TextField
              sx={{
                width: 300,
              }}
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-full"
              placeholder="Address"
              variant="outlined"
            />
          </>
          <h5>Bank Details</h5>
          <>
            <TextField
              sx={{
                width: 300,
              }}
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-60"
              placeholder="Account Number"
              variant="outlined"
            />
            <TextField
              sx={{
                width: 300,
              }}
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-40"
              placeholder="IFSC code"
              variant="outlined"
            />
            <TextField
              sx={{
                width: 300,
              }}
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-full"
              placeholder="Bank Name"
              variant="outlined"
            />
            <TextField
              sx={{
                width: 300,
              }}
              InputProps={{ sx: { height: 40 } }}
              className="outlined-basic-half"
              placeholder="Bank Branch"
              variant="outlined"
            />
          </>
        </div>
        <Button className="savebutton" variant="contained">
          Save
        </Button>
      </Paper>
    </>
  );
};

export default Login;
