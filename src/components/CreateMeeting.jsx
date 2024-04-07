import { useState } from "react";
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
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector } from "react-redux";

const CreateMeetingModal = () => {
  const isAuthorize = useSelector((state) => state.zoomAuth.zoomAuth);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateMeeting = async () => {
    if (isAuthorize) {
      return toast.error("please authorize zoom account");
    }
    setLoading(true);
    const isoDateString = `${meetingDate}T${meetingTime}`;
    const meetingDateObj = new Date(isoDateString);
    const payload = {
      meetingTopic: meetingName,
      startTime: meetingDateObj,
      duration: 60,
    };
    try {
      const data = await SessionApi.createSession(payload);
      if (data?.message) {
        toast.success("Session created successfully!");
        setLoading(false);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
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
            value={meetingName}
            onChange={(e) => setMeetingName(e.target.value)}
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
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
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
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
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

          <LoadingButton
            onClick={handleCreateMeeting}
            sx={{ fontSize: "1.3rem" }}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Create
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateMeetingModal;
