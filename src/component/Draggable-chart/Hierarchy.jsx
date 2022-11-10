import React from "react";

import DraggableList from "./Draggables/Draggable-list";

import data from "./hierarchy-data.json";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { reorder } from "./reducers";
const Hierarchy = () => {
  const [items, setItems] = React.useState(data);

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const newItems = reorder(items, source.index, destination.index);
    setItems(newItems);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="div">
        Employee Hierarchy
      </Typography>
      <Paper style={{ margin: "10px" }}>
        <DraggableList items={items} onDragEnd={onDragEnd} />
      </Paper>
    </div>
  );
};

export default Hierarchy;
