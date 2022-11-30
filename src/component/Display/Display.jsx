import React, { useEffect, useState } from "react";
import { useNavigate } from "react-dom";
import Displaycard from "./Displaycard";
import { Paper } from "@mui/material";

const Display = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("hierarchydata.json");
      const response = await data.json();
      console.log(response);
      setData(response);
    };
    fetchdata();
  }, []);
  return (
    <div>
      {data.map((dat) => {
        if (dat.name === "Linda May" && dat.child) {
          return (
            <>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "5px",
                }}
              >
                <img
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                  src={`${dat.image}`}
                />
                <p>{dat.name}</p>
                <p>{dat.Designation}</p>
              </Paper>
              <Displaycard data={dat.child} />
            </>
          );
        }
      })}
    </div>
  );
};

export default Display;
