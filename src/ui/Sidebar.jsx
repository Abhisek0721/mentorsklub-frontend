import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const { pathname } = useLocation();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const userRole = userInfo?.userData?.role; // Mentor or Mentee

  const active =
    " flex bg-gray-50 text-gray-800 items-center py-[1.2rem] px-[2.4rem] rounded-sm transition-all duration-200";
  const deactive =
    " flex items-center py-[1.2rem] px-[2.4rem] rounded-sm transition-all duration-200";

  const mentorPaths = [
    {
      id: 6,
      pathName: "Sessions",
      path: "/sessions", // mentor can create session and view his own upcoming sessions
      icon: <ClassOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 3,
      pathName: "Subscription",
      path: "/subscriptions", // mentor can see all subscribed mentees
      icon: <NotificationsActiveOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 5,
      pathName: "Messages",
      path: "/messages",
      icon: <TextsmsOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 4,
      pathName: "Notification",
      path: "/notifications",
      icon: <NotificationsNoneOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 7,
      pathName: "Profile",
      path: "/mentor-profile", // mentor can view and edit his own profile
      icon: <PersonPinIcon fontSize="4xl" />,
    },
  ];

  const menteePaths = [
    {
      id: 2,
      pathName: "Mentee",
      path: "/view-mentees", // mentee can see other mentees
      icon: <PeopleOutlineOutlinedIcon fontSize="4xl" />,
    },
    {
      id: 2,
      pathName: "Mentor",
      path: "/view-mentors", // mentee can see other mentors
      icon: <PeopleOutlineOutlinedIcon fontSize="4xl" />,
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
      path: "/view-sessions", // mentee can see all live and upcoming sessions
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
      pathName: "MentorViewProfile",
      path: "/view-mentor-profile", // mentee can see mentor profile
      icon: <PersonPinIcon fontSize="4xl" />,
    },
  ];

  return (
    <div className="bg-white border-r border-gray-100 row-span-full flex my-10 items-center flex-col gap-4 p-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <NavLink to="/">
          <img src={Logo} alt="" className="w-[120px] h-full" />
        </NavLink>
      </div>
      <div className="w-full">
        <ul className="flex flex-col my-10 gap-y-4">
          {(userRole === "mentor" ? mentorPaths : menteePaths)?.map((path) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={`${pathname === path.path ? active : deactive}`}
            >
              <li
                className={`flex gap-4 items-center justify-center text-[1.4rem] font-medium`}
              >
                <span
                  className={`text-4xl ${
                    pathname === path.path ? "text-[#4f46e5]" : "text-gray-400"
                  }`}
                >
                  {path.icon}
                </span>
                <span>{path.pathName}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
