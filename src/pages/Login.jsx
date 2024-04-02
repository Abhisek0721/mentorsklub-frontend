import { useState } from "react";
import logo from "../assets/logo-mentorklub.png";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="border flex justify-center w-screen h-screen items-center bg-gray-50">
      <main className="my-6 mx-7">
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-[150px]    object-cover" />
        </div>
        <div className="text-center pb-14 text-5xl font-semibold">
          <h1>Log in to your account</h1>
        </div>
        <form
          action=""
          className="rounded-sm min-w-[48rem] bg-white shadow-[var(--shadow-md)]"
        >
          <div className="py-[2.4rem] px-[4rem] ">
            <div className="flex flex-col py-12">
              <label className="mb-2 font-medium text-[1.4rem]">
                Email address
              </label>

              <input
                type="email"
                placeholder="demo@example.com"
                className="input-style"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex flex-col pb-12">
              <label className="mb-2 font-medium text-[1.4rem]">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="input-style"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center my-8 pb-5">
              <button className="button-style w-full">Log in</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
