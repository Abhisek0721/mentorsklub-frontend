import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  let location = useLocation();

  if (!userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />; // This will render the child routes
};

export default ProtectedRoute;
