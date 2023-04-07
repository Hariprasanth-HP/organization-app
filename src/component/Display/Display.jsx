import React, { useEffect, useState } from "react";
import { useNavigate } from "react-dom";
import Displaycard from "./Displaycard";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { ResetTvRounded } from "@mui/icons-material";
import "./display.css";
import { useDispatch } from "react-redux";
import { username } from "../../store/Display/action";

const Display = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AddUserReducer);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("hierarchydata.json");
      const response = await data.json();
      setData(response);
    };
    fetchdata();
  }, []);
  return (
    <div className="display">
      <div>
        {data.map((dat) => {
          if (dat.name === user.user && dat.child) {
            return (
              <>
                <Paper key={dat.name} className="displaypaper">
                  <img
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                    src={`${dat.image}`}
                  />
                  <p>{dat.name}</p>
                  <p>{dat.Designation}</p>
                </Paper>
                <Displaycard data={dat.child} />
              </>
            );
          } else if (dat.name !== user.user) {
            return dat.child.map((sub) => {
              if (sub.name === user.user) {
                return (
                  <Paper key={sub.name} className="displaypaper">
                    <img
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                      src={`${sub.image}`}
                    />

                    <p>{sub.name}</p>
                    <p>{sub.Designation}</p>
                  </Paper>
                );
              }
            });

            //
          }
        })}
      </div>
    </div>
  );
};

export default Display;
