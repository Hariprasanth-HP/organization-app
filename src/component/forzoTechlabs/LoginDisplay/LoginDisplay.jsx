import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { editEmployee } from "../../../store/Display/action";
import "./LoginDisplay.css";
import { useSelector } from "react-redux";
import avatar from "../images/avatar.png";
import profile from "../Icons/profile.png";
import employees from "../images/employees.gif";
import mail from "../Icons/mail.png";
import videocall from "../Icons/videocall.png";
import halloween from "../Icons/halloween.png";
import home from "../Icons/home.png";
import { useDispatch } from "react-redux";
import DeleteDialog from "../AlertBoxes/DeleteDialog";
const LoginDisplay = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AddUserReducer);
  const [myList, setMyList] = useState(user.employees);

  useEffect(() => {
    setMyList(user.employees);
  }, [user.employees]);
  const handleEdit = (val) => {
    if (user.isEdit) {
      alert("editemp if");

      return;
    } else {
      alert("editemp");
      dispatch(editEmployee(val, true));
    }
  };

  const [isopen, setisOpen] = React.useState(false);

  const handleClickOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(!isopen);
  };
  return (
    <>
      {myList.length !== 0 ? (
        <Paper className="logindisplay" elevation={3}>
          {myList.map((emp, index) => {
            return (
              <Paper key={index} className="logindisplaypaper">
                <div className="childdetails">
                  <div className="childdetailsentry">
                    <div className="details">
                      <img alt="" className="profile" src={profile} />
                      <h3 className="heading">
                        {emp.firstname} &nbsp;{emp.lastname}
                      </h3>
                    </div>
                    <div className="detailsphone">
                      <div className="details">
                        <img alt="" className="profile" src={videocall} />
                        <p>+91&nbsp;{emp.mobile}</p>
                      </div>
                      <div className="details">
                        <img alt="" className="profile" src={mail} />

                        <p>{emp.email}</p>
                      </div>
                    </div>
                    <div className="details">
                      <img alt="" className="profile" src={halloween} />
                      <p>{emp.dob}</p>
                    </div>
                    <div className="details">
                      <img alt="" className="profile" src={home} />
                      <p>{emp.address}</p>
                    </div>
                  </div>
                  <div>
                    <img alt="" className="avatar" src={avatar} />
                  </div>
                </div>
                <div className="editdelete">
                  <Button
                    className="updatebutton"
                    variant="contained"
                    onClick={() => handleEdit(index)}
                  >
                    edit
                  </Button>
                  <Button className="cancelbutton" variant="contained">
                    <DeleteDialog
                      open={isopen}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                      emp={emp}
                      index={index}
                    />
                  </Button>
                </div>
              </Paper>
            );
          })}
        </Paper>
      ) : (
        <img alt="" className="giff" src={employees} />
      )}
    </>
  );
};

export default LoginDisplay;
