import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { getUserRole } from "../utils/getUserDataFromBrowser";
import MentorUserApi from "../redux/feature/mentor/mentorUser";
import MentorTable from "../components/Table";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const userRole = getUserRole();
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);

  const checkZoomStatusFn = async () => {
    try {
      let data = await MentorUserApi.checkZoomAuthStatus();
      if (data?.data) {
        setShowConnectPrompt(!data?.data?.status);
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
  }, []);

  return (
    <div>
      <div className="heading1">
        <MentorTable />
        <Pagination/>
      </div>
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

export default Dashboard;
