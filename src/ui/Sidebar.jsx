import { IoLogoAngular } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const active =
    " flex text-purple-600 items-center  px-5 py-1 bg-purple-50 rounded-sm transition-all duration-200";
  const deactive =
    " flex  items-center px-5 rounded-sm transition-all duration-200";

  return (
    <div className="bg-white border-r border-gray-100 row-span-full flex justify-center items-center flex-col gap-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <IoLogoAngular className="text-4xl" />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={` ${pathname === "/" ? active : deactive}`}>
            <li className={`flex gap-1 items-center text-lg`}>
              <GoHome
                className={` ${
                  pathname === "/" ? "text-purple-500" : "text-gray-400"
                } text-2xl `}
              />{" "}
              Home
            </li>
          </NavLink>
          <NavLink
            to="/bookings"
            className={` ${pathname === "/bookings" ? active : deactive}`}>
            <li className="flex gap-1 items- text-lg">
              <MdDateRange
                className={` ${
                  pathname === "/bookings" ? "text-purple-500" : "text-gray-400"
                } text-2xl `}
              />{" "}
              Bookings
            </li>
          </NavLink>
          <NavLink
            to="/cabins"
            className={` ${pathname === "/cabins" ? active : deactive}`}>
            <li className="flex gap-1 items- text-lg">
              <LiaIndustrySolid
                className={` ${
                  pathname === "/cabins" ? "text-purple-500" : "text-gray-400"
                } text-2xl `}
              />{" "}
              Cabins
            </li>
          </NavLink>
          <NavLink
            to="/users"
            className={` ${pathname === "/users" ? active : deactive}`}>
            <li className="flex gap-1 items- text-lg">
              <FiUsers
                className={` ${
                  pathname === "/users" ? "text-purple-500" : "text-gray-400"
                } text-2xl `}
              />{" "}
              Users
            </li>
          </NavLink>
          <NavLink
            to="/settings"
            className={` ${pathname === "/settings" ? active : deactive}`}>
            <li className="flex gap-1 items- text-lg">
              <IoSettingsOutline
                className={` ${
                  pathname === "/settings" ? "text-purple-500" : "text-gray-400"
                } text-2xl `}
              />{" "}
              Settings
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
