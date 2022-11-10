import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import DraggableList from "./Draggable-list";
// import ListItem from "@material-ui/core/ListItem";
import ListItem from "@mui/material/ListItem";
import { reorder } from "../reducers";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
const style = {
  draggingListItem: {
    background: "rgb(235,235,235)",
  },
};
const DraggableItem = ({ items, index }) => {
  const [item, setItem] = useState(items || {});
  console.log("Draggable item", item);

  const onDragEnd = (destination, source, id) => {
    console.log("source", source);

    console.log("destinatin", destination);
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(item, source.index, destination.index, id);

    setItem(newItems);
  };
  return (
    <Draggable draggableId={item.ID} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ display: "flex", flexDirection: "column" }}
          className={snapshot.isDragging ? style.draggingListItem : ""}
        >
          <Box sx={{ minWidth: 100 }}>
            <Paper elevation={3} style={{ color: "blue" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary">
                  {item.Designation}
                </Typography>
              </CardContent>
            </Paper>
          </Box>
          {item.child?.length && (
            <DraggableList items={item.child} onDragEnd={onDragEnd} />
          )}
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableItem;
