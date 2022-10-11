import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { database } from "../firebase";
import { Alert } from "@mui/material";
import { useAuth } from "../Context/AuthContext";

export const AddFolder = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowError(false);
    setName("");
  };

  const handleAddFolder = () => {
    if (name) {
      database.folders.add({
        name: name,
        userId: currentUser.uid
      });

      setOpen(false);
      setShowError(false);
      setName("");
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      <Button variant="contained" disableElevation onClick={handleClickOpen}>
        Add Folder
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Folder</DialogTitle>
        <DialogContent>
          {showError && (
            <Alert severity="error">Folder name can't be empty</Alert>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            type="test"
            variant="standard"
            onChange={handleChange}
            sx={{ width: "300px" }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleAddFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
