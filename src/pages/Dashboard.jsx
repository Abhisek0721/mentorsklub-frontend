import { useEffect, useState } from "react";
import MentorTable from "../components/Table";
import toast from "react-hot-toast";
import { getUserRole } from "../utils/getUserDataFromBrowser";
import { useZoomAuthMutation, useZoomAuthStatusMutation } from "../redux/feature/mentor/mentorUser";

const Dashboard = () => {
  // const userRole = getUserRole();
  // const [checkZoomStatusApi, {isLoading}] = useZoomAuthStatusMutation();
  // const [getZoomAuthUri, {isloading}] = useZoomAuthMutation();

  // const checkZoomStatusFn = async () => {
  //   try {
  //     let response = await checkZoomStatusApi();
  //     if (response.error) {
  //       const message = response.error?.data?.errors;
  //       return toast.error(message);
  //     }
  //     console.log("checkZoomStatus", response.data?.data);
  //     if (response.data?.data) {
  //       const status = response.data?.data?.status;
  //       if(!status) {
  //         response = await getZoomAuthUri();
  //         console.log("checkZoomStatus", response.data?.data);
  //         window.open(response?.data.data?.authorizeUrl, '_blank');
  //       }
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   }
  // }

  // useEffect(() => {
  //   if(userRole === 'mentor') {
  //     checkZoomStatusFn();
  //   }
  // }, []);

  return (
    <div>
      <div className="heading1">
        <MentorTable />
      </div>
    </div>
  );
};

export default Dashboard;
