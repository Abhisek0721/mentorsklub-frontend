import CreateMeetingModal from "../components/CreateMeeting";
import SessionTableOfMentor from "../components/SessionTableOfMentor";
import { useState, useEffect } from "react";
import { getUserRole } from "../utils/getUserDataFromBrowser";
import MentorUserApi from "../redux/feature/mentor/mentorUser";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setZoomAuth } from "../redux/feature/auth/zoomAuthSlice";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

const MentorSession = () => {
  const userRole = getUserRole();
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);

  const dispatch = useDispatch();
  const checkZoomStatusFn = async () => {
    try {
      let data = await MentorUserApi.checkZoomAuthStatus();
      if (data?.data) {
        setShowConnectPrompt(!data?.data?.status);
        dispatch(setZoomAuth(!data?.data?.status));
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleConnectToZoom = async () => {
    const data = await MentorUserApi.getZoomAuthUri();
    window.open(data.data?.authorizeUrl, "_blank");
    setShowConnectPrompt(false);
  };

  useEffect(() => {
    if (userRole === "mentor") {
      checkZoomStatusFn();
    }
  }, [userRole]);
  return (
    <div className="heading1">
      <div>
        <CreateMeetingModal />
      </div>
      <SessionTableOfMentor />
      <Dialog
        open={showConnectPrompt}
        onClose={() => setShowConnectPrompt(false)}
      >
        <DialogTitle sx={{ fontSize: "2rem" }}>
          You are not authorized to Zoom
        </DialogTitle>
        <DialogContent>
          <Button onClick={handleConnectToZoom} sx={{ fontSize: "1.5rem" }}>
            Connect to Zoom
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorSession;