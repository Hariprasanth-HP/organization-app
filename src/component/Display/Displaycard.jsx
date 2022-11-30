import { Paper } from "@mui/material";
import React from "react";

const Displaycard = ({ data }) => {
  console.log("data", data);
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
      {data.map((dat) => {
        return (
          <>
            <Paper
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "green",
                color: "white",
                margin: "2px",
              }}
            >
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
