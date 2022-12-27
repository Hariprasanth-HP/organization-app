import React from "react";
import "./DisplaySheet.css";
import Login from "./Login/Login";
import LoginDisplay from "./LoginDisplay/LoginDisplay";
const DisplaySheet = () => {
  return (
    <div className="adminpage">
      <div className="login">
        <Login />
      </div>
      <div className="logindisplay">
        <LoginDisplay />
      </div>
    </div>
  );
};

export default DisplaySheet;
