import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewMentorProfile from "./pages/ViewMentorProfile";
// import Session from "./pages/Sessionpage";
import PrivateRoute from "./pages/ProtectedRoute";
import MenteeSession from "./pages/MenteeSession";
import MentorSession from "./pages/MentorSession";
// import Mentor from "./pages/Mentor";
import MenteProfile from "./pages/MenteeProfile";
import MentorProfile from "./pages/MentorProfile";
import { getUserRole } from "./utils/getUserDataFromBrowser";
import ViewMentees from "./pages/ViewMentees";
import SubscriptionForMentor from "./pages/SubscriptionForMentor";
import SubscriptionForMentee from "./pages/SubscriptionForMentee";
import UserNotification from "./pages/UserNotification";
import UserMessage from "./pages/Message";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notifications" element={<UserNotification />} />
            <Route path="messages" element={<UserMessage />} />
            <Route path="mentor">
              <Route path="mentor-profile" element={<MentorProfile />} />
              <Route path="session" element={<MentorSession />} />
              <Route path="view-profile" element={<ViewMentorProfile />} />
              <Route path="subscription" element={<SubscriptionForMentor />} />
            </Route>
            <Route path="mentee">
              <Route path="mentee-profile" element={<MenteProfile />} />
              <Route path="view-mentees" element={<ViewMentees />} />
              <Route path="view-mentors" element={<Dashboard />} />
              <Route
                path="view-mentor-profile"
                element={<ViewMentorProfile />}
              />
              <Route path="view-sessions" element={<MenteeSession />} />
              <Route path="subscription" element={<SubscriptionForMentee />} />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
