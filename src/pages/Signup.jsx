import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo-mentorklub.png";
import { NavLink } from "react-router-dom";
function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [cnfpassword, setcnfpassword] = useState("");
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const handleClick = (buttonClicked) => {
    if (buttonClicked === "button1") {
      console.log("Role: Mentor");
      setButton1Disabled(true);
      setButton2Disabled(false);
    } else if (buttonClicked === "button2") {
      console.log("Role: Mentee");
      setButton1Disabled(false);
      setButton2Disabled(true);
    }
  };

  const handlebtn = (e) => {
    e.preventDefault();
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!button1Disabled && !button2Disabled) {
      toast.error("Please select a role (Mentor or Mentee) to proceed.", {
        duration: 5000,
      });
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", {
        duration: 5000,
      });
    } else if (regex.test(password)) {
      toast.success("successfully create an account", {
        duration: 2000,
      });
    } else if (password !== cnfpassword) {
      toast.error("passord not match", {
        duration: 5000,
      });
    } else if (email === "" || name === "") {
      toast.error("kindly fill all the detail", {
        duration: 5000,
      });
    } else {
      toast.error(
        "Password should contain at least one capital letter, one lowercase letter, one digit, and one special character.\nPlease try again.",
        {
          duration: 5000,
        }
      );
    }
  };

  return (
    <div className="border  flex justify-center w-screen h-screen items-center bg-gray-50">
      <Toaster />
      <main className="my-6 mx-7">
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-[150px]   object-cover" />
        </div>
        <div className="text-center my-4 text-5xl font-semibold">
          <h1>Create an account</h1>
        </div>
        <form
          action=""
          className="rounded-sm min-w-[48rem] bg-white shadow-[var(--shadow-md)]"
        >
          <div className="py-[2.4rem] px-[4rem]">
            <div className=" flex justify-center gap-14 h-[45px]">
              <button
                onClick={() => handleClick("button1")}
                className={`hover:outline-none ${
                  button1Disabled ? "button-style" : ""
                }`}
                disabled={button1Disabled}
              >
                Mentor
              </button>
              <button
                onClick={() => handleClick("button2")}
                className={`hover:outline-none ${
                  button2Disabled ? "button-style" : ""
                }`}
                disabled={button2Disabled}
              >
                Mentee
              </button>
            </div>
            <div className="flex flex-col  pt-5">
              <label className="mb-2 font-medium text-[1.4rem]">
                Full name
              </label>
              <input
                type="text"
                placeholder="enter your full name"
                autoComplete="true"
                className="input-style"
                value={name}
                required
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-5 ">
              <label className="mb-2 font-medium text-[1.4rem]">
                Email address
              </label>
              <input
                type="email"
                placeholder="demo@example.com"
                autoComplete="true"
                className="input-style"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-[1.4rem]">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                autoComplete="true"
                className="input-style"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col pt-5">
              <label className="mb-2 font-medium text-[1.4rem]">
                Repeat password
              </label>
              <input
                type="password"
                placeholder="enter your password"
                autoComplete="true"
                className="input-style"
                required
                value={cnfpassword}
                onChange={(e) => setcnfpassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center  py-16">
              <button onClick={handlebtn} className="button-style w-full">
                Sign up
              </button>
              <div className="mt-5">
                <h1 className="text-gray-500">Already have an account ? 
                <NavLink to='/login' className='px-4 signup'>Login</NavLink></h1>
              </div>
            </div>
          </div>
        </form>
        {/* <div className={styles.mapContainer}>
          <MapContainer
            className={styles.map}
            center={mapPosition}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </main>
    </div>
  );
}

export default Signup;
