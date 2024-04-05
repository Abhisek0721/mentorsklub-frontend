import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./pages/ProtectedRoute";
import { useSelector } from "react-redux";
import MeneeProfile from "./pages/MeneeProfile";
import MenteeSession from "./pages/MenteeSession";
import MentorSession from "./pages/MentorSession";
import Mentee from "./pages/Mentee";
import Mentor from "./pages/Mentor";

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

            <Route path="profile" element={<MeneeProfile />} />
            <Route path="mentee" element={<Mentee />} />
            <Route path="mentor" element={<Mentor />} />
            <Route path="session" element={<MenteeSession />} />
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
