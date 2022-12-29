import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import "./Login.css";
import TextField from "@mui/material/TextField";
import image1 from "../images/image1.png";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";
import {
  addEmployee,
  updateEmployee,
  editEmployee,
} from "../../../store/Display/action";
import { useDispatch } from "react-redux";
import SaveBox from "../AlertBoxes/SaveBox";
const Login = () => {
  const user = useSelector((state) => state.AddUserReducer);
  const [users, setUsers] = useState([]);
  const [editper, setEditper] = useState("");
  const dispatch = useDispatch();
  let initialState = {
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    dob: "",
    address: "",
    ACno: "",
    ifsc: "",
    bank: "",
    branch: "",
  };
  const [employeeDetails, setEmployeeDetails] = useState(initialState);
  // useEffect(() => {
  //   setUsers(user.employees);
  //   setEditper(user.editEmp);
  // }, []);

  useEffect(() => {
    if (user.employees[user.editEmp] === 0 || user.employees[user.editEmp]) {
      setEmployeeDetails(
        user.employees[user.editEmp]
          ? user.employees[user.editEmp]
          : initialState
      );
    } else {
      setEmployeeDetails(initialState);
    }
  }, [user.editEmp]);
  const {
    firstname,
    lastname,
    mobile,
    email,
    dob,
    address,
    ACno,
    ifsc,
    bank,
    branch,
  } = employeeDetails;

  const handleChange = (e, key) => {
    console.log(e);
    let date = `${e.$D}/${e.$M + 1}/${e.$y}`;
    if (key === "dob") {
      setEmployeeDetails({
        ...employeeDetails,
        [key]: date,
      });
    } else {
      setEmployeeDetails({
        ...employeeDetails,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log("employeeDetails", employeeDetails);
  const [isopen, setisOpen] = React.useState(false);

  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(!isopen);
  };

  const handleSave = (e, emp, index) => {
    e.preventDefault();
    handleClickOpen();
    if (user.isEdit) {
      dispatch(updateEmployee(employeeDetails, user.editEmp));
      dispatch(editEmployee("", false));
    } else {
      dispatch(addEmployee(employeeDetails));
    }
    setEmployeeDetails(initialState);
  };
  return (
    <div className="logincontent">
      <Paper elevation={3}>
        <div>
          <div className="loginimagediv">
            <img className="loginimage" alt="" src={image1} />
          </div>
          <div className="loginbody">
            <form onSubmit={(e) => handleSave(e)}>
              <h3 className="heading1">Add Employee</h3>

              <TextField
                className="outlined-basic-half"
                InputProps={{ sx: { height: 40 } }}
                placeholder="First Name"
                variant="outlined"
                name="firstname"
                onChange={(e) => handleChange(e)}
                value={firstname}
              />
              <TextField
                name="lastname"
                onChange={(e) => handleChange(e)}
                value={lastname}
                className="outlined-basic-half"
                InputProps={{ sx: { height: 40 } }}
                placeholder="Last Name"
                variant="outlined"
              />
              <TextField
                name="mobile"
                onChange={(e) => handleChange(e)}
                value={mobile}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-40"
                placeholder="Mobile Number"
                variant="outlined"
              />
              <TextField
                name="email"
                onChange={(e) => handleChange(e)}
                value={email}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-60"
                placeholder="Email"
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  value={dob || ""}
                  onChange={(e) => handleChange(e, "dob")}
                  className="datepicker"
                  renderInput={(params) => {
                    params.error = false;
                    return (
                      <TextField
                        onChange={(e) => alert(e)}
                        value={dob ? dob : params.inputProps.value}
                        size="small"
                        {...params}
                      />
                      // {params.inputProps.value = ""}
                    );
                  }}
                />
              </LocalizationProvider>
              <TextField
                name="address"
                onChange={(e) => handleChange(e)}
                value={address}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-full"
                placeholder="Address"
                variant="outlined"
              />

              <h3 className="heading2">Bank Details</h3>

              <TextField
                name="ACno"
                onChange={(e) => handleChange(e)}
                value={ACno}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-60"
                placeholder="Account Number"
                variant="outlined"
              />
              <TextField
                name="ifsc"
                onChange={(e) => handleChange(e)}
                value={ifsc}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-40"
                placeholder="IFSC code"
                variant="outlined"
              />
              <TextField
                name="bank"
                onChange={(e) => handleChange(e)}
                value={bank}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-full"
                placeholder="Bank Name"
                variant="outlined"
              />
              <TextField
                name="branch"
                onChange={(e) => handleChange(e)}
                value={branch}
                InputProps={{ sx: { height: 40 } }}
                className="outlined-basic-half"
                placeholder="Bank Branch"
                variant="outlined"
              />
              <div className="buttons">
                {user.isEdit ? (
                  <>
                    <Button
                      className="updatebutton"
                      type="submit"
                      variant="contained"
                    >
                      Update
                    </Button>
                    <Button
                      className="cancelbutton"
                      type="submit"
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    className="savebutton"
                    type="submit"
                    variant="contained"
                  >
                    <SaveBox
                      handleSaveOpen={handleClickOpen}
                      handleSaveClose={handleClose}
                      saveopen={isopen}
                    />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
