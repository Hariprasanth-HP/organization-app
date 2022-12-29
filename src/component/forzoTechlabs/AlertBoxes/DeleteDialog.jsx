import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import delete1 from "../Icons/delete1.png";
import { deleteEmployee } from "../../../store/Display/action";
import { useDispatch } from "react-redux";
import "./DeleteDialog.css";

export default function DeleteDialog({
  open,
  handleClickOpen,
  handleClose,
  emp,
  index,
}) {
  const dispatch = useDispatch();
  const handledelete = (index) => {
    dispatch(deleteEmployee(index));
  };

  return (
    <div>
      <p className="paragraph" onClick={handleClickOpen}>
        Delete
      </p>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialoghead">
          <DialogContent className="Dialogboxx">
            <div>
              <img alt="" className="delete" src={delete1} />
            </div>
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete ?
            </DialogContentText>
            <DialogTitle id="alert-dialog-title">Andrew Root</DialogTitle>
          </DialogContent>
          <DialogActions className="Buttons">
            <Button
              className="updatebutton"
              variant="contained"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <Button
              className="cancelbutton"
              variant="contained"
              onClick={() => {
                handledelete(index);
                handleClose();
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
