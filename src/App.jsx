import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Viewpage from "./pages/Viewpage";
import Session from "./pages/Sessionpage";
import PrivateRoute from "./pages/ProtectedRoute";
import { useSelector } from "react-redux";
import MenteeSession from "./pages/MenteeSession";
import MentorSession from "./pages/MentorSession";
import Mentee from "./pages/Mentee";
import Mentor from "./pages/Mentor";
import MenteProfile from "./pages/MenteeProfile";
import MentorProfile from "./pages/MentorProfile";

function App() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const userRole = userInfo?.userData?.role;
  console.log(userRole, "infor");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="session" element={<MentorSession />} />
            <Route path="mentee-profile" element={<MenteProfile />}>
              <Route path="mentee" element={<Mentee />} />
              <Route path="mentor" element={<Mentor />} />
              <Route path="session" element={<MenteeSession />} />
              <Route path="sessions" element={<Session />} />
              <Route path="viewprofile" element={<Viewpage />} />
            </Route>
            <Route path="mentor-profile" element={<MentorProfile />}>
              <Route path="mentee" element={<Mentee />} />
              <Route path="mentor" element={<Mentor />} />
              <Route path="session" element={<MenteeSession />} />
              <Route path="sessions" element={<Session />} />
              <Route path="viewprofile" element={<Viewpage />} />
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
