import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import checked from "../Icons/checked.png";
import "./SaveBox.css";

export default function SaveBox({ saveopen, handleSaveClose, handleSaveOpen }) {
  return (
    <div>
      <p className="paragraphsave" onClick={handleSaveOpen}>
        Save
      </p>
      <Dialog
        open={saveopen}
        onClose={handleSaveClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="SaveBoxcontent">
          <img alt="" className="checked" src={checked} />

          <DialogContentText id="alert-dialog-description">
            user updated
          </DialogContentText>
          <DialogTitle id="alert-dialog-title" className="title">
            Andrew Root
          </DialogTitle>
        </DialogContent>
        <DialogActions className="OkayHead">
          <Button
            variant="contained"
            className="okay"
            onClick={handleSaveClose}
            autoFocus
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
