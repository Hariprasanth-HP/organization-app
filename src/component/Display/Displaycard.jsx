import { Paper } from "@mui/material";
import React from "react";

const Displaycard = ({ data }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
      {data.map((dat) => {
        return (
          <>
            <Paper key={dat.name} className="displaypaper">
              <img
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                src={`${dat.image}`}
              />
              <p>{dat.name}</p>
              <p>{dat.Designation}</p>
            </Paper>
          </>
        );
      })}
    </div>
  );
};

export default Displaycard;
