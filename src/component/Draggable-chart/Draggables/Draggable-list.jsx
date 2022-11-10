import React from "react";
import DraggableItem from "./Draggable-item";
import { Paper } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const DraggableList = React.memo(({ items, onDragEnd }) => {
  console.log("DraggableList ");
  //   console.log("OnDragEndResponder", OnDragEndResponder);

  return (
    <DragDropContext
      onDragEnd={(destination, source) => onDragEnd(destination, source)}
    >
      <Droppable droppableId={"droppable-list"}>
        {(provided) => (
          <div
            style={{ display: "flex" }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Paper elevation={3} style={{ marginTop: "25px" }}>
                <DraggableItem items={item} index={index} key={item.ID} />
              </Paper>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default DraggableList;
