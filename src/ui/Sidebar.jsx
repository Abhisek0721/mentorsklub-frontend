import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  const { pathname } = useLocation();

  const active =
    " flex text-purple-600 items-center  px-5 py-1 bg-purple-50 rounded-sm transition-all duration-200";
  const deactive =
    " flex  items-center px-5 rounded-sm transition-all duration-200";

  const paths = [
    {
      id: 1,
      pathName: "Mentor",
      path: "/",
      icon: <AccountCircleOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 2,
      pathName: "Mentee",
      path: "/mentees",
      icon: <PeopleOutlineOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 3,
      pathName: "Subscription",
      path: "/subscriptions",
      icon: <NotificationsActiveOutlinedIcon fontSize="4xl" />,
    },

    {
      id: 5,
      pathName: "Messages",
      path: "/messages",
      icon: <TextsmsOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 6,
      pathName: "Sessions",
      path: "/sessions",
      icon: <ClassOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 4,
      pathName: "Notification",
      path: "/notifications",
      icon: <NotificationsNoneOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 7,
      pathName: "Ratings",
      path: "/rationgs",
      icon: <GradeOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 7,
      pathName: "Feedback",
      path: "/feedback",
      icon: <FeedbackOutlinedIcon fontSize="4xl" />,
    },
  ];

  return (
    <div className="bg-white border-r border-gray-100 row-span-full flex my-10 items-center flex-col gap-8 p-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <NavLink to="/">
          <img src={Logo} alt="" className="w-[120px] h-full" />
        </NavLink>
      </div>
      <div>
        <ul className="flex flex-col my-10 gap-y-10">
          {paths?.map((path) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={` ${pathname === path.path ? active : deactive}`}>
              <li className={`flex gap-4 items-center justify-center text-3xl`}>
                <span
                  className={`text-4xl ${
                    pathname === path.path ? "text-purple-500" : "text-gray-400"
                  }`}>
                  {path.icon}
                </span>
                <span className="tracking-[1px]">{path.pathName}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
