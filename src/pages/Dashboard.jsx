import { useState, useEffect } from "react";
import { getUserRole } from "../utils/getUserDataFromBrowser";
import MentorUserApi from "../redux/feature/mentor/mentorUser";
import MentorTable from "../components/Table";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setZoomAuth } from "../redux/feature/auth/zoomAuthSlice";

const Dashboard = () => {
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
    <div>
      <div className="heading1">
        <MentorTable />
      </div>
    </div>
  );
};

export default Dashboard;
