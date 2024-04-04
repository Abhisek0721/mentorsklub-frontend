import { useState } from "react";
import { Toaster } from "react-hot-toast";
import logo from "../assets/logo-mentorklub.png";
import { useForm } from "react-hook-form";
import { useUserSignUpMutation } from "../redux/feature/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";
function Signup() {
  const { register, handleSubmit } = useForm();
  const [signUpFn, { isLoading }] = useUserSignUpMutation();
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  // for toggle the role button
  const handleClick = (buttonClicked) => {
    if (buttonClicked === "button1") {
      console.log("Role: Mentor");
      setButton1Disabled(true);
      setButton2Disabled(false);
      setRole({ role: "mentor" });
    } else if (buttonClicked === "button2") {
      console.log("Role: Mentee");
      setButton1Disabled(false);
      setButton2Disabled(true);
      setRole({ role: "mentee" });
    }
  };

  // handle accont create
  const onSubmit = async (data) => {
    if (!role) {
      return toast.error("please select role", {
        duration: 3000,
      });
    }

    let payload = {
      ...data,
      ...role,
    };

    try {
      const response = await signUpFn(payload);

      if (response.data.data) {
        localStorage.setItem("token", response.data.data.accessToken);
        toast.success("account creation successfully", {
          duration: 3000,
        });
      }

      navigate("/");
    } catch (err) {
      console.log(err);

      toast.error("email already exist", {
        duration: 3000,
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
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
          onSubmit={handleSubmit(onSubmit)}
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
                {...register("fullName", { required: true })}
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
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-[1.4rem]">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                autoComplete="true"
                className="input-style"
                {...register("password", { required: true })}
              />
            </div>

            <div className="flex justify-center  py-16">
              <button type="submit" className="button-style w-full">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Signup;