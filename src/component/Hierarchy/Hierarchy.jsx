import * as React from "react";
import Hierarchydata from "./hierarchy-data.json";
import "./Hierarchy.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
function Hierechy({ treeemployee }) {
  console.log("Hierechy", treeemployee);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {treeemployee.map((tree) => {
        console.log("tree.name", tree.name);
        return (
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              // background: "yellow",
            }}
          >
            <Paper elevation={3} style={{ color: "blue" }}>
              <Box sx={{ minWidth: 100 }}>
                <Paper elevation={3} style={{ color: "blue" }}>
                  <h2>{tree.ID}</h2>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {tree.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {tree.Designation}
                    </Typography>
                  </CardContent>
                </Paper>
              </Box>
            </Paper>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // margin: "10px",
                // background: "red",
              }}
            >
              {tree.child?.length && <Hierechy treeemployee={tree.child} />}
            </div>
          </li>
        );
      })}
    </div>
  );
}
const Employeechart = () => {
  return (
    <div
      className="emp-tree"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Employee Chart</h1>
      <Hierechy treeemployee={Hierarchydata} />
    </div>
  );
};
export default Employeechart;
