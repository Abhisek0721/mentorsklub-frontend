import { useState } from "react";
import { FaGithub, FaLinkedin, FaToolbox } from "react-icons/fa";
import toast from "react-hot-toast";

const ViewMentorProfile = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas architecto repellat ea autem a inventore numquam hic possimus praesentium excepturi corrupti neque similique minus recusandae, odio magnam illum delectus.";


  const [subscribe, setsubscribe] = useState(true);
  const handlesubscribe = () => {
    setsubscribe(!subscribe);
    if (subscribe) {
      toast.success("Subscribe", {
        duration: 2000,
      });
    } else {
      toast.success("Unsubscribe", {
        duration: 2000,
      });
    }
  };

  const [profilePic, setProfilePic] = useState(
    "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
  );

  const skills = ["tailwind", "React js", "Node js", "Bootstrap", "Redux"];

  const userabout = {
    name: "Mentor klub",
    Specialty: "Frontend Developer",
    address: "Bihar, india",
    salary: "12878-123898",
    charge: "123-435",
  };

  const userinformation = [
    {
      id: 1,
      name: "Experience",
      value: "+2year",
    },
    {
      id: 2,
      name: "Fluent in",
      value: "English, Hindi",
    },
    {
      id: 3,
      name: "WorkPlace",
      value: "Remote",
    },
    {
      id: 4,
      name: "Contract",
      value: "Full-time",
    },
  ];

  const sociallink = [
    {
      icon: <FaGithub />,
      href: "#",
    },
    {
      icon: <FaLinkedin />,
      href: "#",
    },
    {
      icon: <FaToolbox />,
      href: "#",
    },
  ];

  const options = {
    apiKey: "free",
    maxFileCount: 1,
  };
  return (
    <div>
      <div className=" flex flex-col md:flex-row">
        <div className="w-full min-w-[200px] md:w-1/4 p-6 flex flex-col justify-center items-center md:block">
          <label htmlFor="profilePicInput">
            <img
              src={profilePic}
              alt=""
              className="w-[170px] h-[170px] object-cover rounded-[50%] md:w-[150px] md:h-[150px]"
            />
          </label>
        </div>

        <div className=" w-full p-6">
          <div>
            <h1 className="text-4xl md:text-6xl tracking-tight">
              {userabout.name}
            </h1>
            <div className="flex flex-wrap flex-col md:flex-row md:justify-between pt-5">
              <ul className="flex flex-wrap md:flex-row gap-4 text-gray-400 font-medium">
                <li>{userabout.address}</li>
                <li>{userabout.salary}/yr</li>
                <li>{userabout.charge}/hr</li>
              </ul>

              <ul className="flex gap-4">
                {sociallink.map((item, index) => (
                  <li className="list-none text-3xl md:text-4xl" key={index}>
                    <a href={item.href}>{item.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 my-12">
            <button
              className="button-style rounded-full flex items-center justify-center gap-2"
              onClick={handlesubscribe}
            >
              {subscribe ? "Subscribe" : "Unsubscribe"}
            </button>
            <button className="button-style bg-red-600 rounded-full focus:outline-red-700">
              Message
            </button>
          </div>

          <div>
            <ul className="flex flex-wrap gap-6">
              {skills.map((item, index) => (
                <li
                  key={index}
                  className="bg-slate-200 p-3 px-7 rounded-[20px] text-[14px] md:text-[18px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-16">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[18px]">
              {userinformation.map((item) => (
                <li key={item.id} className="py-2">
                  <div className="flex flex-wrap items-center">
                    <span className="pr-2 text-gray-400 font-medium">
                      {item.name} :{" "}
                    </span>
                    <span className="md:pl-12 pr-12">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[3px] bg-gray-200"></div>

          <div className="py-8">
            <h1 className="py-4 font-semibold text-2xl md:text-4xl">
              My Strong Skill as a {userabout.Specialty}
            </h1>
            <p className="text-gray-500">{lorem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMentorProfile;
