import logo from "../assets/logo-mentorklub.png";
import { useForm } from "react-hook-form";
import { useUserSignInMutation } from "../redux/feature/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

function Login() {
  const { register, handleSubmit } = useForm();
  const [loginFn, { isLoading }] = useUserSignInMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      let response = await loginFn(data);
      if (response.data.data) {
        localStorage.setItem("token", response.data.data.accessToken);
        toast.success("login successfully", {
          duration: 5000,
        });
        navigate("/");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
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
          onSubmit={handleSubmit(onSubmit)}
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
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col pb-12">
              <label className="mb-2 font-medium text-[1.4rem]">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="input-style"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-center my-8 pb-5">
              <button className="button-style w-full " type="submit">
                Log in
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
