import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SessionApi from "../redux/feature/session/sessionApi";
import toast from "react-hot-toast";

const CreateMeetingModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateMeeting = async (meetingTopic, meetingDateTime) => {
    // Add your logic to create a meeting session
    const isoDateString = meetingDateTime.replace(" ", "T");
    const meetingDate = new Date(isoDateString);
    const payload = {
        "meetingTopic": meetingTopic,
        "startTime": meetingDate,
        "duration": 60
    }
    const data = await SessionApi.createSession(payload);
    if(data?.message) {
        toast.success("Session created successfully!");
    }else{
        toast.error(data?.message);
    }
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        variant="outlined"
        onClick={handleClickOpen}
        className="button-style"
      >
        Create Session
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Meeting Session</DialogTitle>
        <DialogContent sx={{ minWidth: "500px", fontSize: "1.5rem" }}>
          <TextField
            autoFocus
            margin="dense"
            id="meetingName"
            label="Meeting Name"
            type="text"
            fullWidth
            InputProps={{
              style: { fontSize: "1.6rem" },
            }}
            InputLabelProps={{
              style: { fontSize: "1.5rem" },
            }}
          />
          <TextField
            margin="dense"
            id="meetingDate"
            label="Meeting Date"
            type="date"
            fullWidth
            InputProps={{
              style: { fontSize: "1.6rem" },
            }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: "1.5rem" },
            }}
          />
          <TextField
            margin="dense"
            id="meetingTime"
            label="Meeting Time"
            type="time"
            fullWidth
            InputProps={{
              style: { fontSize: "1.6rem" },
            }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: "1.5rem" },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            sx={{ fontSize: "1.3rem" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              handleCreateMeeting(
                document.getElementById("meetingName").value,
                document.getElementById("meetingDate").value +
                  " " +
                  document.getElementById("meetingTime").value
              )
            }
            color="primary"
            sx={{ fontSize: "1.3rem" }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateMeetingModal;
