import profile from "../assets/svg/profile.svg";
import logout from "../assets/svg/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/getUserDataFromBrowser";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="bg-white py-[1.5rem] px-[4.8rem] border-b border-gray-100 flex items-center justify-end gap-6">
      <div className="flex gap-6">
        <h1 className="capitalize">{userInfo?.userData?.fullName}</h1>
        <img
          className="w-[2.2rem] h-[2.2rem] cursor-pointer"
          src={profile}
          alt=""
          onClick={() => navigate(`/${getUserRole()}`)}
        />
        <img
          className="w-[2.2rem] h-[2.2rem] cursor-pointer"
          src={logout}
          alt=""
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
